import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:aadyaa3@illinois.edu"
  },
  {
    "title": "resume",
    "url": "https://drive.google.com/file/d/1z9dUtzftTqVTNk9gufNweOhrVo9GsP8G/view?usp=sharing"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/aadyaagrawal/"
  },
  {
    "title": "github",
    "url": "https://github.com/aadya-agrawal"
  },
]
const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      {/* <div className="top">
        <span>Developed by&nbsp;</span>
      </div> */}
      <div className="bottom">
        <span>Aadya Agrawal</span>
        <img className="emoji" src="./images/emojis/technologist.png" alt="emoji"/>
          <span>2024</span>
      </div>
      <div className="bottom credits">
        <small>
          Theme by
          <a href="https://github.com/bchiang7/bchiang7.github.io" rel="noreferrer" target="_blank"> Brittany Chiang</a>
        </small>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
