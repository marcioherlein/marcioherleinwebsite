type Device = 'desktop' | 'mobile'
type Slide = { src:string; alt:string; title:string; detail:string; origin:string; device:Device; href?:string }
type Gallery = { id:string; label:string; theme:string; slides:Slide[] }

const galleries:Gallery[] = [
 { id:'erm',label:'ERM Intelligence',theme:'enterprise',slides:[
  {src:'/projects/erm-brief-edited.png',alt:'Edited ERM Morning Brief interface showing topic tabs and an expandable intelligence list with article content redacted',title:'Morning Brief · intelligence in context',detail:'A reading workspace for exploring external signals by topic, with source context and expandable items.',origin:'AI-edited visual derived from the owner’s supplied screenshot. Article text and identifying details are redacted; this is not a live capture.',device:'desktop'},
  {src:'/projects/erm-quantification-edited.png',alt:'Edited ERM Risk Quantifier entry screen showing data-source context and the scenario-assessment workflow',title:'Risk Quantifier · a structured assessment entry point',detail:'The interface introduces assessment inputs, scenario analysis, and report outputs. The image shows the entry screen, not calculated results.',origin:'AI-edited visual derived from the owner’s supplied screenshot. Identifying source details and timing claims are removed; this is not a live capture.',device:'desktop'},
 ]},
 { id:'insic',label:'Insic',theme:'finance',slides:[
  {src:'/projects/insic-research.png',href:'https://insic.app/stock/NOW',alt:'Saved Insic ServiceNow stock overview capture with company context, model valuation and price chart',title:'Company context, alongside valuation',detail:'Bring the business description, model assumptions, and market context into the same research view.',origin:'Saved stock-page capture from the Insic repository · earlier interface; displayed figures are not live.',device:'desktop'},
  {src:'/projects/insic-valuation.png',href:'https://insic.app/stock/NOW',alt:'Saved Insic stock-page capture showing valuation scenarios and reverse DCF context',title:'Challenge what the price implies',detail:'Scenario ranges and reverse-valuation context help a researcher inspect the assumptions behind a model conclusion.',origin:'Saved stock-page capture from the Insic repository · earlier interface; displayed figures are not live.',device:'desktop'},
  {src:'/projects/insic-nvda.png',href:'https://insic.app/stock/NVDA',alt:'Saved Insic NVIDIA stock-page capture with valuation context and market price chart',title:'A second company, a different research question',detail:'The saved NVIDIA view illustrates how the interface presents company-specific context rather than a single generic analysis.',origin:'Saved NVIDIA stock-page capture from the Insic repository · earlier interface; these are not current valuations or recommendations.',device:'desktop'},
  {src:'/projects/insic-mobile.png',href:'https://insic.app/stock/NOW',alt:'Saved Insic mobile stock-page capture with financial context, company description and bottom navigation',title:'Research context on a smaller screen',detail:'The mobile interface stacks the research context and uses dedicated bottom navigation for the core product areas.',origin:'Saved mobile stock-page capture from the Insic repository · earlier interface; displayed figures are not live.',device:'mobile'},
 ]},
 { id:'globalshipping',label:'GlobalShipping',theme:'logistics',slides:[
  {src:'/projects/globalshipping-home.jpg',alt:'GlobalShipping desktop landing page showing its real brand, import-planning introduction and explanatory route illustration',title:'Start with the import decision',detail:'The product frames the task around total investment, purchase quantity, and the evidence still needed before buying.',origin:'Actual current frontend rendered locally from the GlobalShipping repository. The landing-page illustration is explanatory; no live provider connection.',device:'desktop'},
  {src:'/projects/globalshipping-desktop-intake.jpg',alt:'GlobalShipping desktop intake interface with choices for starting an import plan',title:'Give the buyer a clear starting point',detail:'The guided intake begins with the buyer’s situation before collecting the facts needed for product, classification, and cost analysis.',origin:'Actual current frontend rendered locally from the GlobalShipping repository. Empty intake state; no supplier account or production data.',device:'desktop'},
  {src:'/projects/globalshipping-mobile-home.jpg',alt:'GlobalShipping mobile landing page with its import-planning introduction and primary action',title:'A mobile entry into the same workflow',detail:'The public-facing introduction and primary action adapt to a phone-sized screen.',origin:'Actual current frontend rendered locally at a mobile viewport. No live provider connection.',device:'mobile'},
  {src:'/projects/globalshipping-mobile-intake.jpg',alt:'GlobalShipping mobile intake screen with product discovery and import-planning options',title:'Guided intake, sized for a phone',detail:'The real mobile interface introduces the same planning journey without presenting a fabricated quote or supplier result.',origin:'Actual current frontend rendered locally at a mobile viewport. Empty intake state; no production data.',device:'mobile'},
 ]},
]

function safe(value:string){return value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')}

export function galleryMarkup(id:string){
 const gallery=galleries.find(g=>g.id===id)
 if(!gallery)return ''
 const devices=new Set(gallery.slides.map(s=>s.device))
 return `<section class="project-gallery gallery-${gallery.theme}" data-gallery="${id}" role="region" aria-roledescription="carousel" aria-label="${gallery.label} product gallery">
  <div class="gallery-heading"><div><span class="eyebrow">A CLOSER LOOK / ${gallery.label.toUpperCase()}</span><h4>See the product in context.</h4></div>${devices.size>1?`<div class="gallery-filters" role="group" aria-label="${gallery.label} screen format"><button type="button" data-format="all" aria-pressed="true">All views</button><button type="button" data-format="desktop" aria-pressed="false">Desktop</button><button type="button" data-format="mobile" aria-pressed="false">Mobile</button></div>`:'<span class="gallery-edited-label">Edited interface visuals</span>'}</div>
  <figure class="gallery-figure"><div class="gallery-stage" tabindex="0" aria-label="${gallery.label} screenshots. Use left and right arrow keys to browse."><div class="gallery-frame"></div><button type="button" class="gallery-expand" aria-label="Enlarge ${gallery.label} image">Enlarge <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 13 13 3M3 3h10v10" stroke="currentColor" stroke-width="1.3"/></svg></button><p class="gallery-image-error" hidden role="alert">This image could not load. Choose another view or open the product website.</p></div><figcaption class="gallery-caption"></figcaption></figure>
  <div class="gallery-navigation"><div class="gallery-pagination"><button type="button" data-step="-1" aria-label="Previous ${gallery.label} image">←</button><span class="gallery-counter" aria-live="polite" aria-atomic="true"></span><button type="button" data-step="1" aria-label="Next ${gallery.label} image">→</button></div><div class="gallery-thumbnails" role="group" aria-label="Choose a ${gallery.label} view"></div></div>
 </section>`
}

export function initGalleries(){
 const dialog=document.createElement('dialog')
 dialog.className='gallery-dialog'
 dialog.setAttribute('aria-labelledby','gallery-dialog-title')
 dialog.innerHTML='<div class="dialog-top"><h2 id="gallery-dialog-title"></h2><button type="button" class="dialog-close" aria-label="Close enlarged image">Close ×</button></div><div class="dialog-image"></div><p class="dialog-origin"></p>'
 document.body.append(dialog)
 let returnFocus:HTMLButtonElement|null=null
 dialog.querySelector<HTMLButtonElement>('.dialog-close')!.addEventListener('click',()=>dialog.close())
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();const p=e as MouseEvent;if(p.clientX<r.left||p.clientX>r.right||p.clientY<r.top||p.clientY>r.bottom)dialog.close()}})
 dialog.addEventListener('close',()=>{document.body.classList.remove('gallery-open');returnFocus?.focus()})
 for(const gallery of galleries){
  const root=document.querySelector<HTMLElement>(`[data-gallery="${gallery.id}"]`)
  if(!root)continue
  let format:'all'|Device='all'
  let selected=0
  let touchStart:{x:number;y:number}|null=null
  const stage=root.querySelector<HTMLElement>('.gallery-stage')!
  const frame=root.querySelector<HTMLElement>('.gallery-frame')!
  const caption=root.querySelector<HTMLElement>('.gallery-caption')!
  const thumbnails=root.querySelector<HTMLElement>('.gallery-thumbnails')!
  const counter=root.querySelector<HTMLElement>('.gallery-counter')!
  const expand=root.querySelector<HTMLButtonElement>('.gallery-expand')!
  const error=root.querySelector<HTMLElement>('.gallery-image-error')!
  const visible=()=>gallery.slides.map((slide,index)=>({slide,index})).filter(({slide})=>format==='all'||slide.device===format)
  function render(){
   const items=visible()
   const current=gallery.slides[selected]
   stage.dataset.device=current.device
   error.hidden=true
   expand.disabled=false
   frame.innerHTML=`<img class="gallery-image" src="${current.src}" alt="${safe(current.alt)}" decoding="async" loading="lazy" />`
   const img=frame.querySelector<HTMLImageElement>('img')!
   img.addEventListener('error',()=>{error.hidden=false;expand.disabled=true})
   caption.innerHTML=`<div><span class="capture-device">${current.device==='mobile'?'Mobile view':'Desktop view'}</span><h5>${current.title}</h5><p>${current.detail}</p>${current.href?`<a class="capture-link" href="${current.href}" target="_blank" rel="noopener noreferrer">Open this stock on Insic <span aria-hidden="true">→</span></a>`:''}</div><p class="capture-origin">${current.origin}</p>`
   counter.textContent=`${items.findIndex(item=>item.index===selected)+1} / ${items.length}`
   thumbnails.innerHTML=items.map(({slide,index})=>`<button type="button" data-slide="${index}" aria-pressed="${index===selected}" aria-label="Show ${safe(slide.title)}"><span class="thumb-number">${String(index+1).padStart(2,'0')}</span><img src="${slide.src}" alt="" width="66" height="44" loading="lazy" /><span>${slide.device==='mobile'?'Mobile':'Desktop'} · ${slide.title.split(' · ')[0]}</span></button>`).join('')
   for(const button of root!.querySelectorAll<HTMLButtonElement>('[data-step]'))button.disabled=items.length<2
   for(const button of root!.querySelectorAll<HTMLButtonElement>('[data-format]'))button.setAttribute('aria-pressed',String(button.dataset.format===format))
  }
  function step(delta:number){
   const items=visible()
   const index=items.findIndex(item=>item.index===selected)
   selected=items[(index+delta+items.length)%items.length].index
   render()
  }
  root.addEventListener('click',e=>{
   const target=(e.target as Element).closest<HTMLButtonElement>('button')
   if(!target)return
   if(target.dataset.step)step(Number(target.dataset.step))
   if(target.dataset.format){
    format=target.dataset.format as 'all'|Device
    if(!visible().some(item=>item.index===selected))selected=visible()[0].index
    render()
   }
   if(target.dataset.slide){selected=Number(target.dataset.slide);render();thumbnails.querySelector<HTMLButtonElement>(`[data-slide="${selected}"]`)?.focus()}
  })
  stage.addEventListener('keydown',e=>{
   if(e.target!==stage)return
   if(e.key==='ArrowRight'){e.preventDefault();step(1)}
   if(e.key==='ArrowLeft'){e.preventDefault();step(-1)}
   if(e.key==='Home'){e.preventDefault();selected=visible()[0].index;render()}
   if(e.key==='End'){e.preventDefault();selected=visible().at(-1)!.index;render()}
  })
  stage.addEventListener('touchstart',e=>{touchStart=e.touches.length===1?{x:e.touches[0].clientX,y:e.touches[0].clientY}:null},{passive:true})
  stage.addEventListener('touchend',e=>{
   if(!touchStart||!e.changedTouches.length)return
   const dx=e.changedTouches[0].clientX-touchStart.x,dy=e.changedTouches[0].clientY-touchStart.y
   if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)step(dx<0?1:-1)
   touchStart=null
  },{passive:true})
  stage.addEventListener('touchcancel',()=>{touchStart=null},{passive:true})
  expand.addEventListener('click',()=>{
   const slide=gallery.slides[selected]
   returnFocus=expand
   dialog.querySelector<HTMLElement>('h2')!.textContent=`${gallery.label} — ${slide.title}`
   dialog.querySelector<HTMLElement>('.dialog-image')!.innerHTML=`<img src="${slide.src}" alt="${safe(slide.alt)}" />`
   dialog.querySelector<HTMLElement>('.dialog-origin')!.textContent=slide.origin
   dialog.showModal()
   document.body.classList.add('gallery-open')
  })
  render()
 }
}
