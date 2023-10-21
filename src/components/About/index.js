import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5 row">
      <div className="my-2 col">
      <h1 id="about">Who Am I?</h1>
        <p>
        I earned my BSIT from Colorado Technical University in July of 2015. During that time I took introductory coding courses and I was hooked. My end goal was to become a developer and after nine years of working as a technical support engineer at two different start-ups, I was unexpectedly laid off. That is when the opportunity to join a full stack web development bootcamp presented itself and there were no excuses for me not to join. In July of 2021 I earned my Full Stack Web Developer certification from the University of Arizona.<br></br>
        Throughout the bootcamp I learned how to use many frameworks and packages within my applications. During the course I was able to practice my HTML, CSS, and JavaScript coding skills. I learned how to create and implement web, third-party, and server-side APIs. I implemented databases and created applications by using ORM, OOP, and MVC processes. What I have learned is to always practice coding and never stop learning.<br></br>
        What I know and understand now is that it's ok to fail but it's what you do after that failure that is most important. 
      </p>
      </div>
      <img src={coverImage} className="my-2 col" style={{ width: "50%" }} alt="cover" />
    </section>
  )
}

export default About;