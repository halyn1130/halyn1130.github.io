import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { experienceOverview } from '../data/experiences';
import { Reveal } from '../components/ui';

export default function Experience({embedded=false}) {
  return (
    <section id="experience" className="experience experience-overview">
      <div className="container">
        <Reveal>
          {!embedded && <SectionLabel number="03 — EXPERIENCE">EXPERIENCE</SectionLabel>}
          <div className="experience-overview-heading">
            <h2>{embedded ? "About" : "Experience"}<span className="title-dot">.</span></h2>
            <p>학력 · 연구 · 실무 · 교육 활동</p>
          </div>
          <div className="experience-map">
            <div className="career-column">
              <h3 className="experience-group-label">학업 · 연구 · 실무 <span>시간순</span></h3>
              <ol className="career-track">
                {experienceOverview.timeline.map(item => (
                  <li key={item.id} className="career-stop">
                    <span className="career-dot" aria-hidden="true" />
                    <p className="career-period">{item.period}</p>
                    <div className="experience-entry-title"><h4>{item.name}</h4><ProjectLink item={item} /></div>
                    <p className="experience-entry-role">{item.role}</p>
                    <p className="experience-entry-summary">{item.summary}</p>
                    {item.result && <p className="career-result">{item.result}</p>}
                  </li>
                ))}
              </ol>
            </div>
            <div className="learning-column">
              <h3 className="experience-group-label">교육 · 활동 <span>확인된 기간순</span></h3>
              <ul className="learning-list">
                {experienceOverview.activities.map(item => (
                  <li key={item.id}>
                    {item.period && <p className="career-period">{item.period}</p>}
                    <div className="experience-entry-title"><h4>{item.name}</h4><ProjectLink item={item} /></div>
                    <p className="experience-entry-role">{item.role}</p>
                    <p className="experience-entry-summary">{item.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {embedded && <div className="resume-credentials">
            <h3>자격증</h3>
            <dl>
              <div><dt>ADsP <span>데이터분석 준전문가</span></dt><dd>2025.06.13</dd></div>
            </dl>
          </div>}
        </Reveal>
      </div>
    </section>
  );
}

function ProjectLink({ item }) {
  return item.project ? <Link className="experience-project-link" to={`/projects/${item.project}`} aria-label={`${item.name} 관련 프로젝트 보기`}><ArrowUpRight size={17} /></Link> : null;
}
