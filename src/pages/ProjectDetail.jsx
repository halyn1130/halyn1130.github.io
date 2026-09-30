import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import ScrollProgress from '../components/ScrollProgress';
import ArchitectureModal from '../components/ArchitectureModal';
import usePageScroll from '../hooks/usePageScroll';
import { projects } from '../data/projects';
import { caseStudies } from '../data/caseStudies';
import { development } from '../data/development';
import { detailContent } from '../data/detailContent';
import SectionLabel from '../components/SectionLabel';
import Tag from '../components/Tag';
import { Asset, Reveal } from '../components/ui';

const assets = import.meta.glob('../assets/**/*', {query:'?url',import:'default',eager:true});
const exists = path => Boolean(assets[`../assets/${path}`]);
function galleryFor(p) {
  if (p.id === 'hansol') return [
    {path:p.image,label:'홈',caption:'홈 · 소비자 동향 / 뉴스 / 세일즈 메모'},
    {path:'hansol/integrated-search.png',label:'통합 검색',caption:'통합 검색 · 제품 / 게시글 / 뉴스'},
    {path:'hansol/chatbot-sources.jpg',label:'챗봇',caption:'AI 챗봇 답변 및 출처 확인 · 일부 출처명은 예시 표시'},
  ];
  if (!p.image || !exists(p.image)) return [];
  return [{path:p.image,label:p.galleryLabel||(p.id==='alk'?'연구 결과':p.id==='adam'?'구현 화면':'구조도'),caption:p.imageCaption}];
}
export default function ProjectDetail() {
  const {id}=useParams();
  const [screen,setScreen]=useState(0);
  const [architecture,setArchitecture]=useState(null);
  const p=projects.find(project=>project.id===id);
  usePageScroll(Boolean(p)&&!architecture);
  useEffect(()=>{
    setScreen(0);setArchitecture(null);window.scrollTo({top:0,behavior:'instant'});
    document.title=p?`${p.title.replace('\n',' ')} — Yu Halyn`:'Project not found — Yu Halyn';
  },[id,p]);
  if(!p)return <main tabIndex={-1} id="main" className="container not-found"><h1>Project not found.</h1><Link to="/projects">프로젝트로 돌아가기</Link></main>;
  const original=caseStudies[id];
  const copy=detailContent[id];
  const story=copy?{...original,...copy,chapters:copy.chapters.map(([title,overview],i)=>({...original.chapters[i],title,overview}))}:original;
  const implementation=development[id];
  const next=projects[(projects.indexOf(p)+1)%projects.length];
  const gallery=galleryFor(p), active=gallery[screen]||gallery[0];
  const modules=id==='hansol'?[
    {name:'데이터 구축',work:'네이버 카페·오늘의집·뉴스·제품 데이터 크롤링, ERD 설계 및 DB 구축'},
    {name:'AI 검색 개발',work:'LangGraph 질문 분석·출처 선택·검색·검증 로직, 근거 부족 시 재검색 및 다중 출처 검색'},
    {name:'팀 리딩',work:'현업 요구 정리, 5인 팀 개발 조율 및 대표·개발팀 미팅 진행'},
  ]:implementation?.modules||[];
  return <main tabIndex={-1} id="main" className={`detail case-study container case-layout case-${id}`}>
    <ScrollProgress/>
    <Reveal className="case-header">
      <Link className="back-link" to="/projects"><ArrowLeft size={17}/> Back to Projects</Link>
      <SectionLabel>{p.category}</SectionLabel>
      <h1>{p.title}</h1>
      <div className="hansol-overview">
        <dl className="hansol-facts">
          {p.organization&&<div><dt>{id==='hansol'?'회사 · 직무':'프로젝트'}</dt><dd>{p.organization}</dd></div>}
          {p.period&&<div><dt>프로젝트 기간</dt><dd>{p.period}</dd></div>}
          {p.fullTitle&&<div><dt>연구명</dt><dd>{p.fullTitle}</dd></div>}
          {!p.organization&&<div><dt>분석 대상</dt><dd>KOH 식각 공정 · Spec Margin</dd></div>}
        </dl>
        <div className="hansol-responsibilities">
          <h2>{copy?.scope||(implementation?.personal?'담당업무':'프로젝트 핵심 구현')}<span>{id==='hansol'?'5인 팀장 · 크롤링/AI 공동 개발':p.role}</span></h2>
          <ul>{modules.map(module=><li key={module.name}><strong>{module.name}</strong><span>{module.work}</span></li>)}</ul>
        </div>
      </div>
      <div className="detail-tech"><div className="tags">{p.tech.map(tech=><Tag key={tech}>{tech}</Tag>)}</div>
        {p.externalLinks&&<div className="source-links">{p.externalLinks.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>}
      </div>
      <div className="hansol-scroll-hint" aria-hidden="true"><ChevronDown size={20} strokeWidth={1.4}/><span>SCROLL</span></div>
    </Reveal>
    {active&&<section className="hansol-screen-page" aria-label="프로젝트 화면 및 자료"><Reveal>
      {gallery.length>1?<div className="screen-switch" role="group" aria-label="구현 화면 선택">{gallery.map((item,i)=><button key={item.path} type="button" aria-pressed={screen===i} onClick={()=>setScreen(i)}>{item.label}</button>)}</div>:<h2 className="detail-gallery-title">{active.label}</h2>}
      <figure className="evidence-figure"><div className="screen-image-stage"><Asset className="case-cover" path={active.path} alt={active.caption||p.title}/></div><figcaption aria-live="polite">{active.caption}</figcaption></figure>
    </Reveal></section>}
    {id==='hansol'&&p.metrics&&<Reveal className="hansol-results hansol-results-section"><h2>주요 성과</h2><div className="hansol-results-grid">{p.metrics.map(([value,label])=><div className="hansol-result" key={label}><span>{label}</span><strong>{value.split(' → ')[0]}<span aria-hidden="true"> → </span><em>{value.split(' → ')[1]}</em></strong></div>)}</div>{p.metricsNote&&<p>{p.metricsNote}</p>}</Reveal>}
    <section className="hansol-work-page" aria-label={copy?.heading||'핵심 구현 및 협업'}>
      <h2 className="hansol-work-heading">{copy?.heading||'핵심 구현 · 협업'}</h2>
      {story.chapters.map((chapter,index)=><div className="hansol-work-row" key={chapter.title}>
        <div className="hansol-work-title"><span>{String(index+1).padStart(2,'0')}</span><h3>{chapter.title}</h3></div>
        <ul>{chapter.overview.map(item=><li key={item}>{item}</li>)}</ul>
        <div className="hansol-work-action">{(chapter.images||chapter.code)&&<button type="button" className="architecture-open" aria-haspopup="dialog" onClick={()=>setArchitecture(chapter)}>{chapter.code?'코드 보기':id==='alk'?'연구 자료 보기':'아키텍처 보기'} <ArrowRight size={17} aria-hidden="true"/></button>}</div>
      </div>)}
    </section>
    <div className="case-ending-page">
      <Reveal className="case-outcome"><SectionLabel>OUTCOME</SectionLabel><h2>{story.outcome}</h2>{story.evidence&&<p>{story.evidence}</p>}{story.outcomeItems&&<ul className="meeting-outcomes">{story.outcomeItems.map(item=><li key={item.title}><h3>{item.title}</h3><p>{item.result}</p></li>)}</ul>}</Reveal>
      <div className="case-closing">
        {p.sources&&<aside className="case-sources"><h3>자료 출처</h3>{p.sources.map(source=><p key={source}>{source}</p>)}</aside>}
        <Link className="next-project" to={`/projects/${next.id}`}><div><small>NEXT PROJECT</small><h3>{next.title}</h3></div><ArrowRight size={32}/></Link>
      </div>
    </div>
    {architecture&&<ArchitectureModal chapter={architecture} onClose={()=>setArchitecture(null)}/>}
  </main>;
}
