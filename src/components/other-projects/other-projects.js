import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

const otherProjectsData = [
  {
    "name": "Reliability of Malware Detection",
    "url": "https://people.ece.ubc.ca/~mjulia/ReSeSS.html",
    "description": "I worked with Prof. Julia Rubin's Trustworthy ML group at UBC Vancouver to analyse adversarial robustness of android malware classifiers. We established that existing high-level static feature representations of code cannot capture malicious intent reliably.",
    "used": [
      {"thing": "TensorFlow"},
      {"thing": "Android"},
      {"thing": "Contrastive Learning"},
    ]
  },
  // {
  //   "name": "Cricket Match Prediction",
  //   "url": "https://github.com/aadya-agrawal/btp",
  //   "description": "I Predicted ball-by-ball outcomes using previous match event data with regression and time-series neural networks Evaluated reliability of our model using betting odds, Pearson’s correlation coefficient, and dynamic time warping",
  //   "used": [
  //     {"thing": "Node.js"},
  //     {"thing": "Firebase"},
  //   ]
  // },
  // {
  //   "name": "SGG",
  //   "url": "https://github.com/aadya-agrawal/btp",
  //   "description": "I developed a score prediction app for the IPL as a hobby project during the 2018 season. This app is available on both iOS and Android platforms. It allows users to make score predictions for IPL matches, adding an exciting and interactive element to the cricket-watching experience. <br> <a class='small' href='https://github.com/skavinvarnan/whistler-ios'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
  //   "used": [
  //     {"thing": "Node.js"},
  //     {"thing": "Firebase"},
  //   ]
  // },
  // {
  //   "name": "ISTSA",
  //   "url": "https://github.com/aadya-agrawal/btp",
  //   "description": "I developed a score prediction app for the IPL as a hobby project during the 2018 season. This app is available on both iOS and Android platforms. It allows users to make score predictions for IPL matches, adding an exciting and interactive element to the cricket-watching experience. <br> <a class='small' href='https://github.com/skavinvarnan/whistler-ios'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
  //   "used": [
  //     {"thing": "Node.js"},
  //     {"thing": "Firebase"},
  //   ]
  // },
  // {
  //   "name": "mix real",
  //   "url": "https://github.com/aadya-agrawal/btp",
  //   "description": "I developed a score prediction app for the IPL as a hobby project during the 2018 season. This app is available on both iOS and Android platforms. It allows users to make score predictions for IPL matches, adding an exciting and interactive element to the cricket-watching experience. <br> <a class='small' href='https://github.com/skavinvarnan/whistler-ios'>👨🏻‍💻Github Source Code👨🏻‍💻</a>",
  //   "used": [
  //     {"thing": "Node.js"},
  //     {"thing": "Firebase"},
  //   ]
  // },

]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Projects</div>
    <div className="section__content">
      {
        otherProjectsData.map((project) => (
          <div className="project">
            <div className="project__name">
              <a href={project.url} target="_blank" rel="noreferrer" className="arrow-link">{project.name}</a>
            </div>
            <p>{Parser(project.description)}</p>
            <div className="project__used">
              {
                project.used.map((item) => (
                  <span className="project__used__item">{item.thing}</span>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>
)

export default FeaturedProjects
