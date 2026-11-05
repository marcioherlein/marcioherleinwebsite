import { test, expect } from '@playwright/test'

const cases = [
  { path: '/work/enterprise-risk/', identity: /enterprise risk|ERM Intelligence/i },
  { path: '/work/insic/', identity: /Insic/i },
  { path: '/work/globalshipping/', identity: /GlobalShipping/i },
]
const routes = ['/', ...cases.map(item => item.path)]

test.describe('useful initial HTML', () => {
  test.use({ javaScriptEnabled: false })

  test('the role, case studies, and contact are available without JavaScript', async ({ page }) => {
    for (const path of routes) {
      const response = await page.goto(path)
      expect(response?.status(), path).toBe(200)
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
      await expect(page.getByRole('main')).toContainText(path === '/' ? /Enterprise Risk Manager/i : cases.find(item => item.path === path)!.identity)
      await expect(page.locator('a[href^="mailto:marciofabrizio@gmail.com"]').first()).toHaveAttribute('href', /^mailto:marciofabrizio@gmail\.com(?:\?|$)/)
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /\S.{30}/)
      expect(await page.title()).not.toMatch(/Vite|^$/)
      if (path !== '/') {
        if (path === '/work/enterprise-risk/') await page.locator('.reference-details > summary').click()
        await expect(page.locator('.project-gallery .gallery-image')).toBeVisible()
        await expect(page.locator('.gallery-caption')).not.toBeEmpty()
      }
      if (path === '/work/globalshipping/') {
        await expect(page.locator('#demo-output')).toContainText('$3,231.30')
        await expect(page.locator('#quantity')).toBeDisabled()
      }
    }
  })
})

test('the homepage leads to focused case studies and real contact destinations', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/')
  await expect(page.getByRole('main')).toContainText(/Enterprise Risk Manager/i)
  await expect(page.getByRole('main')).toContainText('SAP')
  await expect(page.locator('.project-gallery, #demo-form')).toHaveCount(0)
  await expect(page.locator('main a[href*="github.com"]')).toHaveCount(0)

  for (const item of cases) {
    const link = page.locator(`a[href="${item.path}"]`).first()
    await expect(link).toBeVisible()
    await link.click()
    await expect(page).toHaveURL(new RegExp(`${item.path}$`))
    await expect(page.getByRole('main')).toContainText(item.identity)
    const email = page.locator('a[href^="mailto:marciofabrizio@gmail.com"]').first()
    const emailURL = new URL((await email.getAttribute('href'))!)
    expect(emailURL.searchParams.get('subject')).toMatch(/\S.{5}/)
    await page.locator('a[href="/"]').first().click()
    await expect(page).toHaveURL(/\/$/)
  }

  await expect(page.locator('a[href="https://www.linkedin.com/in/marcioherlein/"]').first()).toHaveAttribute('href', 'https://www.linkedin.com/in/marcioherlein/')
  expect(errors).toEqual([])
})

test('keyboard navigation and internal anchor destinations work on every route', async ({ page }) => {
  for (const path of routes) {
    await page.goto(path)
    await page.keyboard.press('Tab')
    await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/#main$/)

    const missing = await page.locator('a[href]').evaluateAll(links => links.flatMap(link => {
      const url = new URL((link as HTMLAnchorElement).href)
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return []
      return document.getElementById(decodeURIComponent(url.hash.slice(1))) ? [] : [url.hash]
    }))
    expect(missing, path).toEqual([])
  }
  await page.emulateMedia({ reducedMotion: 'reduce' })
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto')
})

test('all pages fit narrow phones, phones, tablets, and desktop screens', async ({ page }) => {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const path of routes) {
      await page.goto(path)
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${path} at ${width}px`).toBe(true)
    }
  }
})

test('a cold mobile contact jump remains actionable while images load', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.route('**/projects/*', async route => {
    await new Promise(resolve => setTimeout(resolve, 250))
    await route.continue()
  })
  for (const path of routes) {
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await page.locator('nav a[href$="#contact"]').first().click()
    await expect(page).toHaveURL(/#contact$/)
    const email = page.locator('#contact a[href="mailto:marciofabrizio@gmail.com"]')
    await expect(email).toBeVisible()
    await expect.poll(async () => email.evaluate(element => {
      const rect = element.getBoundingClientRect()
      return rect.top >= 0 && rect.bottom <= innerHeight
    })).toBe(true)
    const before = await email.evaluate(element => element.getBoundingClientRect().top)
    await page.waitForLoadState('networkidle')
    const after = await email.evaluate(element => element.getBoundingClientRect().top)
    expect(Math.abs(after - before), `${path} contact movement after image load`).toBeLessThan(3)
  }
})
