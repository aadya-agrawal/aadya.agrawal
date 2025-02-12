import * as React from "react"
import "./intro.scss"
import headshot from "../../img/pic.jpg"

// TODO: Add a photo on the right side of the intro and icon on title
const introData = {
  title: "Hello! ",
  beforeName: "I'm ",
  name: "Aadya Agrawal,",
  afterName: "and this is my home on the internet. ",
  contact: "Get in touch ",
  email: "aadyaa3@illinois.edu",
  mailTo: "mailto:aadyaa3@illinois.edu",
  resume: "View my resume",
  placeholder: "drive link",
  resumeLink: "https://drive.google.com/file/d/1fCHxvzAlnK8SJhEHrufvTwr52uQq6od7/view?usp=sharing",
};
const Intro = () => {
  const [isHovering, setIsHovering] = React.useState(false);
  const onMouseOver = _ => {
    setIsHovering(true);
  };
  const onMouseOut = _ => {
    setIsHovering(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setIsHovering(true);
      setTimeout(() => {
        setIsHovering(false);
      }, 2000);
    }, 1000);
  }, []);

  return <header className="intro_container">
    <div className="intro">
      <h1 className="intro__hello">{introData.title}
        <span className={isHovering ? "emoji wave-hand animated wave" : "emoji wave-hand animated"} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onFocus={onMouseOver} onBlur={onMouseOut} role="button" tabIndex={0} aria-label="wave hand"></span>
      </h1>

      <h2 className="intro__tagline">{introData.beforeName}
        <span className="name">{introData.name}</span>{"\n"}
        {introData.afterName}
        {/* <span className="emoji technologist"></span> */}
      </h2>

      <h3 className="intro__contact">
        <span>{introData.contact}</span>
        <span className="emoji pointer"></span>
        <span>
        <a href={introData.mailTo}
          className="highlight-link">{introData.email}</a>
      </span>
      <br />
      {/* {"\n"} */}
      <span>{introData.resume}</span>
        <span className="emoji pointer"></span>
        <span>
        <a href={introData.resumeLink}
          className="highlight-link">{introData.placeholder}</a>
      </span>
      </h3>
      {/* <h3 className="intro__contact">
        <span>{introData.resume}</span>
        <span className="emoji pointer"></span>
        <span>
        <a href={introData.resumeLink}
          className="highlight-link">{introData.placeholder}</a>
      </span>
      </h3> */}
    </div>
    <div className="intro_photo_container">
      <img src={headshot} alt=""/> 
    </div>
    {/* <img src="../../img/pic.jpg" alt="" className="intro_photo"/> */}
  </header>
};

export default Intro
