import {useEffect} from 'react';
import {Navigate,useLocation} from 'react-router-dom';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
const sections={about:About,projects:Projects};
export default function Home({section='home'}){
  const {hash}=useLocation();
  useEffect(()=>{document.title=section==='home'?'Yu Halyn — AI / AX Portfolio':`${section[0].toUpperCase()+section.slice(1)} — Yu Halyn`;window.scrollTo({top:0,behavior:'instant'});},[section]);
  const legacy=hash.slice(1);
  if(section==='home'&&legacy==='contact')return <Navigate to="/" replace/>;
  if(section==='experience'||(section==='home'&&legacy==='experience'))return <Navigate to="/about" replace/>;
  if(section==='home'&&sections[legacy])return <Navigate to={`/${legacy}`} replace/>;
  const Content=sections[section]||Hero;
  return <main key={section} tabIndex={-1} id="main" className={section==='home'?'home-page':'section-page'}><Content/></main>;
}
