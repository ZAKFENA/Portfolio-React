import React from "react";
import "./About.css";
// import Header from "../components/Header";

function About() {
  return (
    <div className="container">
      <div className="profpic-md">
        <img id="ProfilePic" src="/profile.jpg" width="250" height="250" />
        <p>
          Full-Stack web developer dedicated to building web application with an
          intuitive user experience. Currently attending University of Minnesota
          Coding Bootcamp and have acquired skills in HTML, CSS, JQuery,
          Javascript, Node.js, Express, SQL, MongoDB, React.js. Worked on
          multiple projects both individually and with teams. I enjoy the
          challenge of solving problems, working as a team, and presenting a
          mobile-first app that strives for user experience satisfaction. With
          additional skills such as leadership, working with a team, as well as
          working in a fast pace environment I gained working in the mortgage
          loan processing industry I look forward to leverage my skills to
          develop web mobile-first web applications that provide great user
          experience.{" "}
        </p>
        <h3>
          <a href="./Assets/RESUME  - ZEKARIAS NEGASSA.pdf" target="_blank">
            Resume |
          </a>
          <a
            href="https://www.linkedin.com/in/zekarias-negassa"
            target="_blank"
          >
            | LinkedIn |
          </a>
          <a href="https://www.github.com/ZAKFENA" target="_blank">
            | GitHub{" "}
          </a>
        </h3>
      </div>
    </div>
  );
}

export default About;
