import * as React from "react"
import Parser from 'html-react-parser';
import "./other-projects.scss"

// - name: Crowd DJ
//   url: https://github.com/crowddj/crowddj-react
//   code: https://github.com/crowddj/crowddj-react
//   description:
//     A web app that allows people who are at a party or social gathering with a DJ to request songs via their smartphones. The web app allows people to see the currently playing song, request songs, upvote songs, and rate songs so the DJ can see how the crowd is feeling and act accordingly. In other words, Crowd DJ is essentially a crowdsourced music queue. <br>
//     <a class="small" href="http://projects.hackbeanpot.com/2017-projects.html">🏆 Won Best UI/UX Design at Hackbeanpot 2017 🏆</a>
//   used:
//     - thing: React
//     - thing: Sass
//     - thing: Firebase
//     - thing: Spotify API

const otherProjectsData = [
  {
    "name": "Surf Videos",
    "url": "https://github.com/bchiang7/Surf-Videos",
    "code": "https://github.com/bchiang7/Surf-Videos",
    "description": "Small React project created during an interview process to browse and search surf videos via the YouTube API.",
    "used": [
      {"thing": "JavaScript"},
      {"thing": "React"},
      {"thing": "React Router"},
      {"thing": "Axios"},
      {"thing": "YouTube API"}
    ]
  },
  {
    "name": "Halcyon Theme",
    "url": "https://bchiang7.github.io/halcyon-site/",
    "code": "https://github.com/bchiang7/halcyon-site",
    "description": "A minimal, dark theme for Sublime Text, Atom, VS Code, and more published to <a class='underline-link' href='https://packagecontrol.io/packages/Halcyon%20Theme'>Package Control</a>, <a class='underline-link' href='https://atom.io/themes/halcyon-syntax'>Atom Package Manager</a>, <a class='underline-link' href='https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode'>Visual Studio Marketplace</a>, and <a class='underline-link' href='https://www.npmjs.com/package/hyper-halcyon-theme'>NPM</a>.",
    "used": [
      {"thing": "Gatsby"},
      {"thing": "Sublime Text"},
      {"thing": "Atom"},
      {"thing": "VS Code"},
      {"thing": "iTerm2"},
      {"thing": "Hyper"}
    ]
  },
  {
    "name": "Lonely Planet DBMS",
    "url": "https://github.com/bchiang7/CS3200-Project",
    "code": "https://github.com/bchiang7/CS3200-Project",
    "description": "Final project for my Database Design course at Northeastern. A simple web application that allows users to filter through a database containing Lonely Planet's <a class='underline-link' href='https://www.amazon.com/Lonely-Planets-Ultimate-Travel-Places/dp/1760342777' target='_blank'>Top 500 Travel Destinations</a>. Users are able to add themselves as visitors as well as leave reviews of the destinations.",
    "used": [
      {"thing": "Python"},
      {"thing": "MySQL"},
      {"thing": "Flask"},
      {"thing": "HTML"},
      {"thing": "CSS"},
      {"thing": "JavaScript"}
    ]
  },
  {
    "name": "myNEU Redesign",
    "url": "https://bchiang7.github.io/Redesign-myNEU/",
    "code": "https://github.com/bchiang7/Redesign-myNEU",
    "description": "myNEU student portal web prototype for my information science senior project. I conducted a study that aimed to answer the question of how myNEU can be improved to provide students at Northeastern with a better user experience. Informed by usability metrics gathered from user tests, I redesigned and developed a web prototype of myNEU.",
    "used": [
      {"thing": "Jekyll"},
      {"thing": "HTML"},
      {"thing": "SCSS"},
      {"thing": "JavaScript"}
    ]
  },
  {
    "name": "Crowd DJ",
    "url": "https://github.com/crowddj/crowddj-react",
    "code": "https://github.com/crowddj/crowddj-react",
    "description": "A web app that allows people who are at a party or social gathering with a DJ to request songs via their smartphones. The web app allows people to see the currently playing song, request songs, upvote songs, and rate songs so the DJ can see how the crowd is feeling and act accordingly. In other words, Crowd DJ is essentially a crowdsourced music queue. <br> <a class='small' href='http://projects.hackbeanpot.com/2017-projects.html'>🏆 Won Best UI/UX Design at Hackbeanpot 2017 🏆</a>",
    "used": [
      {"thing": "React"},
      {"thing": "Sass"},
      {"thing": "Firebase"},
      {"thing": "Spotify API"}
    ]
  },
  {
    "name": "Weather Widget",
    "url": "http://quiet-dusk-89245.herokuapp.com/",
    "code": "https://github.com/bchiang7/DemoWebApp",
    "description": "A simple weather app I made at HubSpot's Fall 2016 Web App Workshop with Node.js, Express, and Heroku. I used the OpenWeatherMap API to get weather and forecast data, and then used the current city's coordinates to create a map background that reflected the current city using the Google Maps API.",
    "img": "weather",
    "used": [
      {"thing": "JavaScript"},
      {"thing": "CSS"},
      {"thing": "Node.js"},
      {"thing": "Express"},
      {"thing": "Heroku"},
      {"thing": "OpenWeatherMap API"},
      {"thing": "Google Maps API"}
    ]
  },
  {
    "name": "Personal Website V2",
    "url": "https://bchiang7.github.io/v2",
    "code": "https://github.com/bchiang7/v2",
    "description": "Second iteration of my personal website. Designed and developed with a conscious effort to avoid using any superfluous frameworks like Bootstrap.",
    "used": [
      {"thing": "Jekyll"},
      {"thing": "Handlebars"},
      {"thing": "SCSS"},
      {"thing": "JavaScript"},
      {"thing": "Github Pages"}
    ]
  },
  {
    "name": "React Resume",
    "url": "https://bchiang7.github.io/react-profile/",
    "code": "https://github.com/bchiang7/react-profile/",
    "description": "An online version of my 2016 resume I made for fun. I was interested in learning React.js, so I found this <a class='underline-link' href='https://medium.com/learning-new-stuff/building-your-first-react-js-app-d53b0c98dc#.1439cdewq'>simple tutorial</a> and it kind of spun into this weekend project. I probably didn't need to use React at all, but hey, at least I learned a few things!",
    "used": [
      {"thing": "JavaScript"},
      {"thing": "React"},
      {"thing": "CSS"}
    ]
  },
  {
    "name": "CourseSource",
    "url": "http://webdevspring2016-chiangbrittany.rhcloud.com/project/client/#/login",
    "code": "https://github.com/bchiang7/WebDevSpring2016/tree/master/public/project",
    "description": "A web application built on the MEAN (MongoDB, Express, Angular, Node) stack for my web development course at Northeastern. I created this web app with the intention of providing Northeastern Students a better experience browsing the courses offered at Northeastern.",
    "used": [
      {"thing": "HTML"},
      {"thing": "CSS"},
      {"thing": "JavaScript"},
      {"thing": "Node.js"},
      {"thing": "Angular"},
      {"thing": "Express"},
      {"thing": "MongoDB"}
    ]
  },
  {
    "name": "NU Women in Tech",
    "url": "http://nuwit.ccs.neu.edu/",
    "code": "https://github.com/nuwit/website",
    "description": "Complete overhaul and redesign of NU Women in Tech's club website using Jekyll, built while serving as web chair on the e-board.",
    "used": [
      {"thing": "Jekyll"},
      {"thing": "HTML"},
      {"thing": "CSS"},
      {"thing": "JavaScript"},
      {"thing": "Bootstrap"}
    ]
  },
  {
    "name": "Fontipsums",
    "url": "https://bchiang7.github.io/fontipsums",
    "code": "https://github.com/bchiang7/fontipsums",
    "description": "As someone who has an eye for typography, I wanted a way to visually see different font combinations together. I whipped up this simple website to display some of my favorite pairings combined with some fun lorem ipsum variations I found on the web.",
    "used": [
      {"thing": "HTML"},
      {"thing": "SCSS"}
    ]
  },
  {
    "name": "Personal Website V1",
    "url": "https://bchiang7.github.io/v1",
    "code": "https://github.com/bchiang7/website_2015/",
    "description": "My first portfolio website I designed and built in 2014. I learned quite a bit about HTML, CSS, and SEO. Since then, I think my web development and design skills have improved immensely.",
    "used": [
      {"thing": "HTML"},
      {"thing": "CSS"},
      {"thing": "Bootstrap"},
      {"thing": "JavaScript"},
      {"thing": "jQuery"}
    ]
  },
  {
    "name": "One Card For All",
    "url": "http://onecardforall.org",
    "description": "MullenLowe's 2016 holiday site built around an algorithm that generates a holiday greeting to each and every person on the planet. As new names appear, visitors can watch them fall, like snowflakes, onto a stylized world map. Users can also find their own name and see it as part of the world collective. Check out this short <a class='underline-link' href='http://us.mullenlowe.com/work/one-card-for-all/' target='_blank'>video</a> describing the project.",
    "used": [
      {"thing": "HTML"},
      {"thing": "SCSS"},
      {"thing": "JavaScript"},
      {"thing": "jQuery"}
    ]
  },
  {
    "name": "JetBlue HumanKinda",
    "url": "https://us.mullenlowe.com/work/humankinda/",
    "description": "Tumblr site complementing JetBlue's HumanKinda campaign and documentary. The site houses the video documentary, many graphics created by Mullen for the campaign, and an interactive quiz to determine how 'HumanKinda' you are. Learn more about this project <a class='underline-link' href='http://us.mullenlowe.com/work/humankinda/' target='_blank'>here</a>.",
    "used": [
      {"thing": "HTML"},
      {"thing": "CSS"},
      {"thing": "JavaScript"},
      {"thing": "jQuery"}
    ]
  }
]

const FeaturedProjects = () => (
  <section className="section other-projects">
    <div className="section__title">Other Projects</div>
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
