export default function SectionLabel({children,number}){return <div className="section-label"><span className="blue-dot"/>{children}{number&&<span className="section-number">{number}</span>}</div>}
