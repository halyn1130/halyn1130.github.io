import {Link,useLocation} from 'react-router-dom';
export default function Footer(){
  const {pathname}=useLocation();
  if(pathname==='/')return <footer className="container home-footer"><span>© 2026 YU HALYN</span><Link to="/about">ABOUT ME</Link><Link to="/projects">Projects</Link></footer>;
  return <footer className="container"><span>© 2026 YU HALYN</span><span>AI / AX PORTFOLIO</span><a href="#main" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>BACK TO TOP ↑</a></footer>;
}
