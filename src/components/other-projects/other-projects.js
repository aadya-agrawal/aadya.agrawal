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
  {
    "name": "Cricket Match Prediction",
    "url": "https://github.com/aadya-agrawal/btp",
    "description": "I collected event data of 500+ cricket matches using web-scraping to predict ball-by-ball outcomes with regression and time-series neural networks. I evaluated the reliability of the prediction model using betting odds and Pearson's correlation coefficient. This project was a part of my Bachelor's Thesis at IIT Delhi.",
    "used": [
      {"thing": "Dynamic Time Warping"},
      {"thing": "Monte Carlo Methods"},
    ]
  },
  {
    "name": "Scene Graph Prediction for 3D Point Clouds",
    "url": "",
    "description": "I designed a tool to predict scene graphs of LiDAR point clouds without ground truth semantic segmentation labels. We then used the graphs to generate new scenes with objects inserted at semantically coherent locations using conditional-VAE and GAN models.",
    "used": [
      {"thing": "PyTorch"},
      {"thing": "Autoencoders"},
      {"thing": "LiDAR"},
      {"thing": "KITTI Data"},
    ]
  },
  {
    "name": "Exploring Human Brain Functions",
    "url": "",
    "description": "I improved the code pipeline for Prof. Rahul Garg's technique for Temporal Synchronization Analysis at IIT Delhi. We observed variation in BOLD signals using fMRI scans of participants in visual task-based experiments. I developed a technique that implements log-likelihood-based centroid search for K-Means clustering of brain regions to identify unconventional brain activity.",
    "used": [  
      {"thing": "Python OOP"},
      {"thing": "fMRI Data"},
      {"thing": "Clustering"},
    ]
  },
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
