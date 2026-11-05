import { defineConfig } from '@playwright/test'
import { existsSync } from 'node:fs'
// External requests retain their proxy; loopback readiness stays local.
process.env.NO_PROXY = [process.env.NO_PROXY, '127.0.0.1', 'localhost'].filter(Boolean).join(',')
process.env.no_proxy = process.env.NO_PROXY
const executablePath = process.env.CHROMIUM_PATH || (existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined)
export default defineConfig({
 testDir:'./tests/browser',
 workers:2,
 use:{baseURL:'http://127.0.0.1:5173',headless:true,launchOptions:{executablePath}},
 webServer:{command:process.env.CI ? 'npm run preview -- --port 5173 --strictPort' : 'npm run dev -- --port 5173 --strictPort',url:'http://127.0.0.1:5173',reuseExistingServer:!process.env.CI},
 projects:[{name:'desktop',use:{viewport:{width:1440,height:1000}}},{name:'mobile',use:{viewport:{width:390,height:844},isMobile:true,hasTouch:true}}],
 reporter:process.env.CI ? [['list'],['html',{open:'never'}]] : 'list',
})
