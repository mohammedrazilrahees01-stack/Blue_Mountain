const header=document.querySelector('.site-header');
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
let ticking=false;
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(()=>{header?.classList.toggle('scrolled',window.scrollY>30);document.documentElement.style.setProperty('--scroll-y',`${window.scrollY}px`);ticking=false});ticking=true}}, {passive:true});
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.10,rootMargin:'0px 0px -35px'});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=`${Math.min(i%4,3)*80}ms`;observer.observe(el)});
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.querySelectorAll('.magnetic').forEach(el=>{let frame;el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.11,y=(e.clientY-r.top-r.height/2)*.13;cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>el.style.transform=`translate3d(${x}px,${y}px,0)`)});el.addEventListener('pointerleave',()=>el.style.transform='')});
 const hero=document.querySelector('.hero'); const media=document.querySelector('.hero-media');
 hero?.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;requestAnimationFrame(()=>media.style.transform=`scale(1.025) translate3d(${x*10}px,${y*8}px,0)`)});
 hero?.addEventListener('pointerleave',()=>media.style.transform='');
 document.querySelectorAll('.use-card').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;requestAnimationFrame(()=>card.style.setProperty('--card-shift',`${x*7}px ${y*7}px`))});card.addEventListener('pointerleave',()=>card.style.removeProperty('--card-shift'))});
}