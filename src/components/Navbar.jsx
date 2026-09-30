import {useEffect,useState} from 'react';
import {useLocation,Link} from 'react-router-dom';
import {Menu,X} from 'lucide-react';
export default function Navbar(){
 const [open,setOpen]=useState(false);const location=useLocation();
 const active=location.pathname.split('/')[1]||'home';
 useEffect(()=>setOpen(false),[location]);
 return <header className="nav-wrap"><nav className="container nav" aria-label="주 메뉴"><Link className="wordmark" to="/">Yu Halyn<span>.</span></Link><button className="menu-toggle" aria-label="메뉴 열기/닫기" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><div className={`nav-links ${open?'open':''}`}>{['Home','About','Projects'].map(label=><Link key={label} className={active===label.toLowerCase()?'active':''} aria-current={active===label.toLowerCase()?'page':undefined} to={label==='Home'?'/':`/${label.toLowerCase()}`} onClick={()=>setOpen(false)}>{label}</Link>)}</div></nav></header>;
}
