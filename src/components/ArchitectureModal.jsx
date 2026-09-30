import {useEffect,useRef} from 'react';
import {createPortal} from 'react-dom';
import {X} from 'lucide-react';
import {Asset} from './ui';

export default function ArchitectureModal({chapter,onClose}){
  const dialog=useRef(null);
  useEffect(()=>{
    const trigger=document.activeElement;
    const root=document.documentElement;
    const overflow=root.style.overflow;
    root.style.overflow='hidden';
    dialog.current.showModal();
    return()=>{root.style.overflow=overflow;trigger?.focus({preventScroll:true});};
  },[]);
  return createPortal(<dialog ref={dialog} className="architecture-modal" aria-labelledby="architecture-title" onCancel={e=>{e.preventDefault();onClose();}} onClick={e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)onClose();}}}>
    <header><h2 id="architecture-title">{chapter.title}</h2><button type="button" autoFocus onClick={onClose} aria-label="상세 자료 팝업 닫기"><X size={22}/></button></header>
    <div className="architecture-modal-content">{chapter.images?.map((path,i)=><figure key={path}><Asset path={path} alt={chapter.imageCaptions?.[i]||chapter.title}/><figcaption>{chapter.imageCaptions?.[i]}</figcaption></figure>)}{chapter.code && <div className="source-code"><p>{chapter.code.file} · 소스 발췌</p><pre><code>{chapter.code.text}</code></pre></div>}</div>
  </dialog>,document.body);
}
