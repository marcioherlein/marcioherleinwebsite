import AxeBuilder from '@axe-core/playwright'
import { test, expect } from '@playwright/test'

for (const path of ['/', '/work/enterprise-risk/', '/work/insic/', '/work/globalshipping/']) {
 test(`production content has no detected A/AA issues: ${path}`,async({page})=>{
  await page.goto(path)
  if(path==='/work/enterprise-risk/')await page.locator('.reference-details > summary').click()
  if(path==='/work/globalshipping/')await page.getByRole('button',{name:/25 units.*compact/i}).click()
  const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze()
  expect(results.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))).toEqual([])
 })
}
