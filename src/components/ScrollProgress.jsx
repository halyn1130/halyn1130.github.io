import {useEffect,useState} from 'react';

export default function ScrollProgress(){
  const [progress,setProgress]=useState(0);
  useEffect(()=>{
    let frame=0;
    const update=()=>{
      frame=0;
      const max=document.documentElement.scrollHeight-window.innerHeight;
      setProgress(max>0?Math.max(0,Math.min(1,window.scrollY/max)):0);
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
    const observer=new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule);
    update();
    return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);};
  },[]);
  const percent=Math.round(progress*100);
  return <div className="reading-progress" role="progressbar" aria-label="프로젝트 읽기 진행률" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
    <span className="reading-progress-number">{percent}%</span>
    <div className="reading-progress-track"><div className="reading-progress-fill" style={{transform:`scaleY(${progress})`}}/><span className="reading-progress-dot" style={{top:`${progress*100}%`}}/></div>
  </div>;
}
