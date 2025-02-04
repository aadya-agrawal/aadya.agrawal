import * as React from "react"

// Maybe add professor names?
const backgroundData = {
  title: "Background",
  part1: "I'm currently doing my master's in Computer Science at the ",
  part2: "University of Illinois at Urbana-Champaign",
  part3: ", focusing on computer vision applications for sports analytics.",
  line2Part1: "Before UIUC, I did my undergraduation in Mathematics and Computing at ",
  line2Part2: "Indian Institute of Technology (IIT) Delhi",
  line2Part3: ". I worked on a variety of projects ranging from predicting scene graphs for 3D point clouds of real-world traffic scenes to understanding human brain functions using IS-TSA on fMRI data. For more information, please check out my ",
  line2Part4: "resume",
  line2Part4Href: "https://drive.google.com/file/d/1sIqlM_DhgVKCmesUEB3fLtVvBxtWNyAk/view?usp=sharing",
  line2Part5: ".",
  line3: "When I'm not in front of a computer screen, I'm probably watching sports, searching for new food spots, or crossing an item off my bucket list.",
};
const Background = () => (
  <section className="section background">
    <div className="section__title">{backgroundData.title}</div>
    <div className="section__content">
      <p>
        {backgroundData.part1}
        <strong>{backgroundData.part2}</strong>
        {backgroundData.part3}
      </p>
      <p>
        {backgroundData.line2Part1}
        <strong>{backgroundData.line2Part2}</strong>
        {backgroundData.line2Part3}
        <a className="underline-link" href={backgroundData.line2Part4Href} target="_blank" rel="noreferrer">{backgroundData.line2Part4}</a>
        {backgroundData.line2Part5}
      </p>
      <p>
        {backgroundData.line3}
      </p>
    </div>
  </section>
)

export default Background
