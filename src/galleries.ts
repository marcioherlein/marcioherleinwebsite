type Device = 'desktop' | 'mobile'
type Slide = { src:string; width:number; height:number; alt:string; title:string; detail:string; origin:string; device:Device; href?:string }
type Gallery = { id:string; label:string; theme:string; slides:Slide[] }

const galleries:Gallery[] = [
 { id:'erm',label:'ERM Intelligence',theme:'enterprise',slides:[
  {src:'/projects/erm-brief-edited.png',width:1586,height:992,alt:'Edited ERM Morning Brief interface showing topic tabs and an expandable intelligence list with article content redacted',title:'Morning Brief · intelligence in context',detail:'A reading workspace for exploring external signals by topic, with source context and expandable items.',origin:'AI-edited visual derived from the owner’s supplied screenshot. Article text and identifying details are redacted; this is not a live capture.',device:'desktop'},
  {src:'/projects/erm-quantification-edited.png',width:1586,height:992,alt:'Edited ERM Risk Quantifier entry screen showing data-source context and the scenario-assessment workflow',title:'Risk Quantifier · a structured assessment entry point',detail:'The interface introduces assessment inputs, scenario analysis, and report outputs. The image shows the entry screen, not calculated results.',origin:'AI-edited visual derived from the owner’s supplied screenshot. Identifying source details and timing claims are removed; this is not a live capture.',device:'desktop'},
 ]},
 { id:'insic',label:'Insic',theme:'finance',slides:[
  {src:'/projects/insic-research.png',width:1280,height:900,href:'https://insic.app/stock/NOW',alt:'Saved Insic ServiceNow stock overview capture with company context, model valuation and price chart',title:'Company context, alongside valuation',detail:'Bring the business description, model assumptions, and market context into the same research view.',origin:'Saved stock-page capture from the Insic repository · earlier interface; displayed figures are not live.',device:'desktop'},
  {src:'/projects/insic-valuation.png',width:1280,height:900,href:'https://insic.app/stock/NOW',alt:'Saved Insic stock-page capture showing valuation scenarios and reverse DCF context',title:'Challenge what the price implies',detail:'Scenario ranges and reverse-valuation context help a researcher inspect the assumptions behind a model conclusion.',origin:'Saved stock-page capture from the Insic repository · earlier interface; displayed figures are not live.',device:'desktop'},
  {src:'/projects/insic-nvda.png',width:1280,height:900,href:'https://insic.app/stock/NVDA',alt:'Saved Insic NVIDIA stock-page capture with valuation context and market price chart',title:'A second company, a different research question',detail:'The saved NVIDIA view illustrates how the interface presents company-specific context rather than a single generic analysis.',origin:'Saved NVIDIA stock-page capture from the Insic repository · earlier interface; these are not current valuations or recommendations.',device:'desktop'},
  {src:'/projects/insic-mobile.png',width:390,height:844,href:'https://insic.app/stock/NOW',alt:'Saved Insic mobile stock-page capture with financial context, company description and bottom navigation',title:'Research context on a smaller screen',detail:'The mobile interface stacks the research context and uses dedicated bottom navigation for the core product areas.',origin:'Saved mobile stock-page capture from the Insic repository · earlier interface; displayed figures are not live.',device:'mobile'},
 ]},
 { id:'globalshipping',label:'GlobalShipping',theme:'logistics',slides:[
  {src:'/projects/globalshipping-home.jpg',width:1440,height:980,alt:'GlobalShipping desktop landing page showing its real brand, import-planning introduction and explanatory route illustration',title:'Start with the import decision',detail:'The product frames the task around total investment, purchase quantity, and the evidence still needed before buying.',origin:'Actual current frontend rendered locally from the GlobalShipping repository. The landing-page illustration is explanatory; no live provider connection.',device:'desktop'},
  {src:'/projects/globalshipping-desktop-intake.jpg',width:1440,height:980,alt:'GlobalShipping desktop intake interface with choices for starting an import plan',title:'Give the buyer a clear starting point',detail:'The guided intake begins with the buyer’s situation before collecting the facts needed for product, classification, and cost analysis.',origin:'Actual current frontend rendered locally from the GlobalShipping repository. Empty intake state; no supplier account or production data.',device:'desktop'},
  {src:'/projects/globalshipping-mobile-home.jpg',width:390,height:844,alt:'GlobalShipping mobile landing page with its import-planning introduction and primary action',title:'A mobile entry into the same workflow',detail:'The public-facing introduction and primary action adapt to a phone-sized screen.',origin:'Actual current frontend rendered locally at a mobile viewport. No live provider connection.',device:'mobile'},
  {src:'/projects/globalshipping-mobile-intake.jpg',width:390,height:844,alt:'GlobalShipping mobile intake screen with product discovery and import-planning options',title:'Guided intake, sized for a phone',detail:'The real mobile interface introduces the same planning journey without presenting a fabricated quote or supplier result.',origin:'Actual current frontend rendered locally at a mobile viewport. Empty intake state; no production data.',device:'mobile'},
 ]},
]

type Format = 'all' | Device
type Zoom = 'fit' | 'actual' | 'double'

function safe(value:string){
 return value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')
}

function originLabel(gallery:Gallery){
 if(gallery.id==='erm')return 'AI-edited interface visual'
 if(gallery.id==='insic')return 'Archived product capture'
 return 'Local frontend capture'
}

function imageMarkup(slide:Slide){
 return `<img class="gallery-image" src="${safe(slide.src)}" alt="${safe(slide.alt)}" width="${slide.width}" height="${slide.height}" decoding="async" loading="lazy" />`
}

function captionMarkup(gallery:Gallery,slide:Slide){
 return `<div class="capture-description"><span class="capture-device">${slide.device==='mobile'?'Mobile view':'Desktop view'}</span><h3>${safe(slide.title)}</h3><p>${safe(slide.detail)}</p>${slide.href?`<a class="capture-link" href="${safe(slide.href)}" target="_blank" rel="noopener noreferrer">Open this stock on Insic <span aria-hidden="true">→</span></a>`:''}</div><details class="capture-provenance"><summary>${originLabel(gallery)} <span class="capture-source-prompt">· image source</span></summary><p class="capture-origin">${safe(slide.origin)}</p></details>`
}

function thumbnailMarkup(gallery:Gallery,indices:number[],selected:number,disabled=false){
 return indices.map(index=>{
  const slide=gallery.slides[index]
  return `<button type="button" data-slide="${index}" aria-pressed="${index===selected}" aria-label="Show ${safe(slide.title)}"${disabled?' disabled':''}><img src="${safe(slide.src)}" alt="" width="${slide.width}" height="${slide.height}" loading="lazy" decoding="async" /><span>${slide.device==='mobile'?'Mobile':'Desktop'} · ${safe(slide.title.split(' · ')[0])}</span></button>`
 }).join('')
}

/** Pure markup: the initial image and its source remain available without JavaScript. */
export function galleryMarkup(id:string){
 const gallery=galleries.find(item=>item.id===id)
 if(!gallery)return ''
 const first=gallery.slides[0]
 const mixedDevices=new Set(gallery.slides.map(slide=>slide.device)).size>1
 const heading=gallery.id==='erm'?'Interface references':gallery.id==='insic'?'Inside the research workspace':'From introduction to guided intake'
 return `<section class="project-gallery gallery-${gallery.theme}" data-gallery="${safe(gallery.id)}" role="region" aria-roledescription="carousel" aria-label="${safe(gallery.label)} product gallery">
  <div class="gallery-heading"><div><span class="eyebrow">A closer look / ${safe(gallery.label)}</span><h2>${heading}</h2></div>${mixedDevices?`<div class="gallery-filters" role="group" aria-label="${safe(gallery.label)} screen format"><button type="button" data-format="all" aria-pressed="true" disabled>All views</button><button type="button" data-format="desktop" aria-pressed="false" disabled>Desktop</button><button type="button" data-format="mobile" aria-pressed="false" disabled>Mobile</button></div>`:'<span class="gallery-edited-label">Edited interface visuals</span>'}</div>
  <figure class="gallery-figure"><div class="gallery-stage" data-device="${first.device}" role="group" tabindex="0" aria-label="${safe(gallery.label)} screenshots. Use left and right arrow keys, Home, or End to browse."><div class="gallery-frame">${imageMarkup(first)}</div><button type="button" class="gallery-expand" aria-label="Enlarge ${safe(gallery.label)} image" disabled>Enlarge <svg aria-hidden="true" width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 13 13 3M3 3h10v10" stroke="currentColor" stroke-width="1.3"/></svg></button><p class="gallery-image-error" hidden role="alert">This image could not load. Choose another view or open the product website.</p></div><figcaption class="gallery-caption">${captionMarkup(gallery,first)}</figcaption></figure>
  <div class="gallery-navigation"><div class="gallery-pagination"><button type="button" data-step="-1" aria-label="Previous ${safe(gallery.label)} image" disabled>←</button><span class="gallery-counter" aria-live="polite" aria-atomic="true">1 / ${gallery.slides.length}</span><button type="button" data-step="1" aria-label="Next ${safe(gallery.label)} image" disabled>→</button></div><div class="gallery-thumbnails" role="group" aria-label="Choose a ${safe(gallery.label)} view">${thumbnailMarkup(gallery,gallery.slides.map((_,index)=>index),0,true)}</div></div>
 </section>`
}

function createViewer(){
 const dialog=document.createElement('dialog')
 const suffix=document.querySelectorAll('.gallery-dialog').length
 const titleId=`gallery-dialog-title-${suffix}`
 const helpId=`gallery-dialog-help-${suffix}`
 dialog.className='gallery-dialog'
 dialog.setAttribute('aria-labelledby',titleId)
 dialog.setAttribute('aria-describedby',helpId)
 dialog.innerHTML=`<div class="dialog-top"><h2 id="${titleId}"></h2><button type="button" class="dialog-close" aria-label="Close enlarged image">Close ×</button></div><div class="dialog-tools"><div class="dialog-zoom" role="group" aria-label="Image zoom"><button type="button" data-zoom="fit" aria-pressed="true">Fit</button><button type="button" data-zoom="actual" aria-pressed="false">100%</button><button type="button" data-zoom="double" aria-pressed="false">200%</button></div><a class="dialog-original" target="_blank" rel="noopener noreferrer">Open original image <span aria-hidden="true">↗</span></a></div><p class="dialog-help" id="${helpId}">Choose 100% or 200% to inspect details, then scroll or drag the image.</p><div class="dialog-image" data-zoom="fit" tabindex="0" role="region" aria-label="Enlarged product image. When zoomed, scroll to inspect its details."></div><p class="dialog-error" hidden>This image could not load. You can open the original image using the link above.</p><details class="dialog-provenance"><summary>Image source</summary><p class="dialog-origin"></p></details>`
 document.body.append(dialog)
 const view=dialog.querySelector<HTMLElement>('.dialog-image')!
 const close=dialog.querySelector<HTMLButtonElement>('.dialog-close')!
 const zoomButtons=Array.from(dialog.querySelectorAll<HTMLButtonElement>('button[data-zoom]'))
 const original=dialog.querySelector<HTMLAnchorElement>('.dialog-original')!
 const error=dialog.querySelector<HTMLElement>('.dialog-error')!
 let returnFocus:HTMLElement|null=null
 let current:Slide|null=null
 let zoom:Zoom='fit'
 let drag:{pointer:number;x:number;y:number;left:number;top:number}|null=null

 function setZoom(next:Zoom){
  zoom=next
  view.dataset.zoom=zoom
  const img=view.querySelector('img')
  if(img&&current){
   if(zoom==='fit')img.removeAttribute('style')
   else{
    const scale=zoom==='double'?2:1
    img.style.width=`${current.width*scale}px`
    img.style.height=`${current.height*scale}px`
    img.style.maxWidth='none'
    img.style.maxHeight='none'
   }
  }
  view.scrollTo(0,0)
  for(const button of zoomButtons)button.setAttribute('aria-pressed',String(button.dataset.zoom===zoom))
 }

 close.addEventListener('click',()=>dialog.close())
 for(const button of zoomButtons)button.addEventListener('click',()=>setZoom(button.dataset.zoom as Zoom))
 dialog.addEventListener('click',event=>{
  if(event.target!==dialog)return
  const rect=dialog.getBoundingClientRect()
  if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close()
 })
 dialog.addEventListener('close',()=>{
  document.body.classList.remove('gallery-open')
  drag=null
  delete view.dataset.dragging
  if(returnFocus?.isConnected)returnFocus.focus({preventScroll:true})
 })
 // Touch users pan with the browser's native overflow scrolling; mouse users may drag.
 view.addEventListener('pointerdown',event=>{
  if(zoom==='fit'||event.pointerType!=='mouse'||event.button!==0)return
  event.preventDefault()
  view.focus({preventScroll:true})
  drag={pointer:event.pointerId,x:event.clientX,y:event.clientY,left:view.scrollLeft,top:view.scrollTop}
  view.dataset.dragging='true'
  view.setPointerCapture(event.pointerId)
 })
 view.addEventListener('pointermove',event=>{
  if(!drag||event.pointerId!==drag.pointer)return
  view.scrollLeft=drag.left-(event.clientX-drag.x)
  view.scrollTop=drag.top-(event.clientY-drag.y)
 })
 const stopDrag=(event:PointerEvent)=>{
  if(!drag||event.pointerId!==drag.pointer)return
  drag=null
  delete view.dataset.dragging
  if(view.hasPointerCapture(event.pointerId))view.releasePointerCapture(event.pointerId)
 }
 view.addEventListener('pointerup',stopDrag)
 view.addEventListener('pointercancel',stopDrag)

 return {
  dialog,
  open(gallery:Gallery,slide:Slide,trigger:HTMLButtonElement){
   current=slide
   returnFocus=trigger
   error.hidden=true
   for(const button of zoomButtons)button.disabled=false
   dialog.querySelector<HTMLElement>('h2')!.textContent=`${gallery.label} — ${slide.title}`
   dialog.querySelector<HTMLElement>('.dialog-origin')!.textContent=slide.origin
   dialog.querySelector<HTMLDetailsElement>('.dialog-provenance')!.open=false
   original.href=slide.src
   const img=document.createElement('img')
   img.alt=slide.alt
   img.width=slide.width
   img.height=slide.height
   img.draggable=false
   img.decoding='async'
   img.addEventListener('error',()=>{
    if(!img.isConnected)return
    error.hidden=false
    for(const button of zoomButtons)button.disabled=true
   })
   img.src=slide.src
   view.replaceChildren(img)
   setZoom('fit')
   dialog.showModal()
   document.body.classList.add('gallery-open')
   close.focus({preventScroll:true})
  },
 }
}

let viewer:ReturnType<typeof createViewer>|undefined

export function initGalleries(){
 const roots=Array.from(document.querySelectorAll<HTMLElement>('[data-gallery]:not([data-gallery-ready])'))
 if(!roots.length)return
 if(!viewer?.dialog.isConnected)viewer=createViewer()
 const phoneViewport=window.matchMedia('(max-width: 760px)').matches
 for(const root of roots){
  const gallery=galleries.find(item=>item.id===root.dataset.gallery)
  if(!gallery)continue
  root.dataset.galleryReady='true'
  const firstMobile=gallery.slides.findIndex(slide=>slide.device==='mobile')
  let format:Format=phoneViewport&&firstMobile>=0?'mobile':'all'
  let selected=format==='mobile'?firstMobile:0
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
   const current=gallery!.slides[selected]
   stage.dataset.device=current.device
   error.hidden=true
   expand.disabled=false
   const img=document.createElement('img')
   img.className='gallery-image'
   img.alt=current.alt
   img.width=current.width
   img.height=current.height
   img.decoding='async'
   img.loading='lazy'
   img.addEventListener('error',()=>{
    if(!img.isConnected)return
    error.hidden=false
    expand.disabled=true
   })
   img.src=current.src
   frame.replaceChildren(img)
   caption.innerHTML=captionMarkup(gallery!,current)
   counter.textContent=`${items.findIndex(item=>item.index===selected)+1} / ${items.length}`
   thumbnails.innerHTML=thumbnailMarkup(gallery!,items.map(item=>item.index),selected)
   for(const button of root.querySelectorAll<HTMLButtonElement>('[data-step]'))button.disabled=items.length<2
   for(const button of root.querySelectorAll<HTMLButtonElement>('[data-format]')){
    button.disabled=false
    button.setAttribute('aria-pressed',String(button.dataset.format===format))
   }
  }

  function step(delta:number){
   const items=visible()
   const index=items.findIndex(item=>item.index===selected)
   selected=items[(index+delta+items.length)%items.length].index
   render()
  }

  root.addEventListener('click',event=>{
   const target=event.target instanceof Element?event.target.closest<HTMLButtonElement>('button'):null
   if(!target||target.disabled)return
   if(target.dataset.step)step(Number(target.dataset.step))
   if(target.dataset.format){
    const next=target.dataset.format
    if(next!=='all'&&next!=='desktop'&&next!=='mobile')return
    format=next
    const items=visible()
    if(!items.some(item=>item.index===selected))selected=items[0].index
    render()
   }
   if(target.dataset.slide!==undefined){
    const next=Number(target.dataset.slide)
    if(!visible().some(item=>item.index===next))return
    selected=next
    render()
    thumbnails.querySelector<HTMLButtonElement>(`[data-slide="${selected}"]`)?.focus({preventScroll:true})
   }
  })
  stage.addEventListener('keydown',event=>{
   if(event.target!==stage)return
   if(!['ArrowRight','ArrowLeft','Home','End'].includes(event.key))return
   event.preventDefault()
   if(event.key==='ArrowRight')step(1)
   else if(event.key==='ArrowLeft')step(-1)
   else{
    const items=visible()
    selected=event.key==='Home'?items[0].index:items.at(-1)!.index
    render()
   }
  })
  stage.addEventListener('touchstart',event=>{
   if(event.target instanceof Element&&event.target.closest('button,a')){touchStart=null;return}
   touchStart=event.touches.length===1?{x:event.touches[0].clientX,y:event.touches[0].clientY}:null
  },{passive:true})
  stage.addEventListener('touchend',event=>{
   if(!touchStart||!event.changedTouches.length)return
   const dx=event.changedTouches[0].clientX-touchStart.x
   const dy=event.changedTouches[0].clientY-touchStart.y
   if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)step(dx<0?1:-1)
   touchStart=null
  },{passive:true})
  stage.addEventListener('touchcancel',()=>{touchStart=null},{passive:true})
  expand.addEventListener('click',()=>viewer!.open(gallery,gallery.slides[selected],expand))
  render()
 }
}
