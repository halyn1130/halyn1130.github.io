import {useEffect} from 'react';

// Slow wheel transitions at page boundaries; keep long sections freely scrollable.
export default function usePageScroll(enabled){
  useEffect(()=>{
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(!enabled||reduced.matches)return;
    let frame=0,busy=false,lastWheel=0,total=0,lastInput=0;
    const root=document.documentElement;
    const stop=()=>{cancelAnimationFrame(frame);busy=false;root.classList.remove('page-scroll-moving');};
    const wheel=e=>{
      if(reduced.matches||e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY)||!e.deltaY)return;
      const now=performance.now();
      if(busy){e.preventDefault();lastWheel=now;return;}
      if(now-lastWheel<180){e.preventDefault();lastWheel=now;return;}
      if(e.target.closest('pre,input,textarea,select,[contenteditable="true"]'))return;
      const padding=parseFloat(getComputedStyle(root).scrollPaddingTop)||0;
      const nodes=[...document.querySelectorAll('.case-layout>.case-header,.hansol-screen-page,.hansol-results-section,.case-layout>.hansol-work-page,.case-layout>.case-ending-page,body:has(.case-layout) footer')];
      const points=nodes.map(n=>Math.max(0,n.getBoundingClientRect().top+window.scrollY-padding));
      const direction=Math.sign(e.deltaY),y=window.scrollY;
      const current=points.findIndex(point=>Math.abs(point-y)<10);
      if(current<0)return;
      const next=current+direction;
      if(next<0||next>=points.length)return;
      // Do not jump over content taller than the available viewport.
      if(Math.abs(points[next]-y)>window.innerHeight-padding+80)return;
      e.preventDefault();
      if(now-lastInput>180||Math.sign(total)!==direction)total=0;
      total+=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?window.innerHeight:1);lastInput=now;
      if(Math.abs(total)<45)return;
      total=0;busy=true;lastWheel=now;
      const target=Math.min(points[next],root.scrollHeight-window.innerHeight),start=performance.now();
      root.classList.add('page-scroll-moving');
      const tick=time=>{
        const t=Math.min(1,(time-start)/650),ease=t*t*(3-2*t);
        window.scrollTo({top:y+(target-y)*ease,behavior:'instant'});
        if(t<1)frame=requestAnimationFrame(tick);
        else{stop();lastWheel=performance.now();}
      };
      frame=requestAnimationFrame(tick);
    };
    const cancel=()=>{stop();lastWheel=0;};
    window.addEventListener('wheel',wheel,{passive:false});
    window.addEventListener('keydown',cancel);
    window.addEventListener('touchstart',cancel,{passive:true});
    return()=>{stop();window.removeEventListener('wheel',wheel);window.removeEventListener('keydown',cancel);window.removeEventListener('touchstart',cancel);};
  },[enabled]);
}
