import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { pageMeta, renderPage } from './src/pages'

const routes = ['/', '/work/enterprise-risk/', '/work/insic/', '/work/globalshipping/', '/404.html']
const escape = (s:string) => s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')
const base = process.env.PUBLIC_SITE_URL?.replace(/\/$/,'')
if(base && !/^https:\/\/[^/\s]+(?:\/[^\s]*)?$/.test(base)) throw new Error('PUBLIC_SITE_URL must be the actual HTTPS website URL.')
export default defineConfig({
 appType:'mpa',
 plugins:[{
  name:'render-career-pages',
  transformIndexHtml: {
   order:'pre',
   handler(html,ctx){
    const path=ctx.path === '/404.html' ? '/404.html' : ctx.path.replace(/index\.html$/,'')
    const route=routes.includes(path)?path:'/'
    const meta=pageMeta[route]
    const absolute=base?`${base}${route}`:undefined
    return html.replace('<!--page-title-->',escape(meta.title)).replace('<!--page-description-->',escape(meta.description)).replace('<!--page-head-->',`<meta property="og:title" content="${escape(meta.title)}"><meta property="og:description" content="${escape(meta.description)}"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image">${absolute?`<link rel="canonical" href="${escape(absolute)}"><meta property="og:url" content="${escape(absolute)}"><meta property="og:image" content="${escape(base!)}/social-card.png">`:''}`).replace('<!--page-body-->',renderPage(route))
   }
  },
  generateBundle(){
   if(base){this.emitFile({type:'asset',fileName:'robots.txt',source:`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`});this.emitFile({type:'asset',fileName:'sitemap.xml',source:`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.filter(r=>r!=='/404.html').map(r=>`<url><loc>${escape(base+r)}</loc></url>`).join('')}</urlset>`})}
  }
 }],
 build:{rollupOptions:{input:Object.fromEntries(routes.map(route=>[route==='/'?'home':route.replaceAll('/','_'),resolve(process.cwd(),route==='/'?'index.html':route==='/404.html'?'404.html':`${route.slice(1)}index.html`)]))}}
})
