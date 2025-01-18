import * as React from "react"
import "./skills.scss"

const skillsData = {
  "languagesTitle": "Languages",
  "languages": ["Python", "C++", "SQL", "JavaScript", "HTML/CSS", "Java"],
  "frameworksTitle": "Frameworks",
  "frameworks": ["PyTorch", "TensorFlow", "React", "Node", "Express"],
  "toolsTitle": "Tools",
  "tools": ["Bash", "Git", "MongoDB", "Jupyter", "Tableau"]
}

const Skills = () => (
  <section className="section skills">
    <div className="section__title">Skills</div>
    <div className="section__content">
      <div className="skillz">
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.languagesTitle}</div>
          <ul>
            {skillsData.languages.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.frameworksTitle}</div>
          <ul>
            {skillsData.frameworks.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
        <div className="skillz__category">
          <div className="skillz__category__label">{skillsData.toolsTitle}</div>
          <ul>
            {skillsData.tools.map((data) => <li className="skillz__category__item">{data}</li>)}
          </ul>
        </div>
      </div>
    </div>
  </section>
)

export default Skills
