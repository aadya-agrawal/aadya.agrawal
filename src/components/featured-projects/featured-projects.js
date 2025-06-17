import * as React from "react"
import "./featured-projects.scss"

const FeaturedProjects = () => (
  <section className="section featured-projects">
    <div className="section__title">Featured Projects</div>
    <div className="section__content">      
      <div className="project mocap-video">
        <figure className="project__pic">
          <img src="../../img/T2P_1.gif" alt="Predicting human motion" />
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">Modelling Human Interactions</div>
          <p>I am developing a hierarchical attention-based diffusion transformer for multi-agent motion prediction. Current experiments outperform SOTA on long-term predictions and close-proximity handling. This video demonstrates the model's ability to accurately predict complex 3D human motion. The model's predictions are in color, and the ground truth is in black.</p>
        </figcaption>
      </div>

      <div className="project ev2-vs-ev6">
        <figure className="project__pic">
          <img src="../../img/ev2_vs_ev6.gif" alt="Human brain responses" />
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">Exploring Unconventional Brain Responses</div>
          <p>I developed a clustering algorithm for fMRI signals to identify patterns in the brain. The example shows the activation patterns in two settings (left and center), and their difference (right), in a visual task-based experiment where participants were asked to remember sequences of images. Note the difference in activation (yellow) and deactivation (blue) patterns.</p>
        </figcaption>
      </div>
      
      <div className="project scene-graph">
        <figure className="project__pic">
          <img src="../../img/scene_graph_gif.gif" alt="Graph of a road scene" />
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">Synthetic Data Generation for Autonomous Vehicles</div>
          <p>I created a tool to infer relational graph structures in LiDAR point clouds, which allows for structured generative modeling of realistic high-traffic scenes. This project involved using conditional-GANs to insert various objects into scenes to generate semantically valid training data.</p>
        </figcaption>
      </div>

      <div className="project cricket-sim">
        <figure className="project__pic">
          <img src="../../img/cricket_sim.png" alt="Cricket Simulation" />
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">T20 Cricket Simulation</div>
          <p>Modeled ball-by-ball match outcomes using Monte Carlo simulation and a hierarchical empirical Bayes approach. The project boosted predictive accuracy by 8% using LSTMs for time-series event forecasting and validated model reliability using betting-market alignment as in the image.</p>
        </figcaption>
      </div>

      <div className="project malware-detection">
        <figure className="project__pic">
          <img src="../../img/malware_detection.png" alt="Malware Detection" />
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">Reliable Android Malware Detection</div>
          <p>I designed a contrastive learning framework to identify key features for detecting malware in Android applications, achieving 94.8% accuracy. This project involved benchmarking the classifier's adversarial robustness and explainability to ensure its readiness for real-world deployment in enterprise settings.</p>
        </figcaption>
      </div>

      <div className="project tug-interface">
        <figure className="project__pic">
          <img src="../../img/TUG_interface.jpeg" alt="TUG Interface" />
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">Human Compatibility Prediction from Language Games</div>
          <p>I built a full-stack word association game using React and Flask to predict interpersonal compatibility. By training a Siamese neural network, the model achieved 90.9% recall and an 83.3% F1 score on human-rated evaluations.</p>
        </figcaption>
      </div>

      <div className="project playpal-home">
        <figure className="project__pic">
          <img src="../../img/playpal_home.png" alt="PlayPal Home" />
        </figure>
        <figcaption className="project__caption">
          <div className="project__name">Playpal: Workout Scheduling Platform</div>
          <p>I developed a full-stack web application to connect users with nearby workout partners based on sport, schedule, and skill level. The platform features a REST API with Firebase authentication and a responsive, mobile-first design.</p>
        </figcaption>
      </div>
    </div>
  </section>
)

export default FeaturedProjects
