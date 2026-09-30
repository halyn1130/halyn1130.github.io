import {motion,useReducedMotion} from 'framer-motion';
import {Image as ImageIcon} from 'lucide-react';
const assets=import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,svg}',{eager:true,query:'?url',import:'default'});
export function Reveal({children,className=''}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : {opacity: 0, y: 48}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.12}}
      transition={reduce ? {duration: 0} : {
        y: {type: 'spring', stiffness: 140, damping: 17, mass: 0.9},
        opacity: {duration: 0.35, ease: 'easeOut'},
      }}
    >
      {children}
    </motion.div>
  );
}
export function Asset({path,alt,className='',loading='lazy'}){const url=assets[`../assets/${path}`];return url?<img className={`asset ${className}`} src={url} alt={alt} loading={loading}/>:<div className={`asset placeholder ${className}`} role="img" aria-label={`${alt} — 실제 이미지 미제공`}><ImageIcon size={24} strokeWidth={1}/><span>IMAGE REQUIRED</span><code>/assets/{path}</code></div>}
