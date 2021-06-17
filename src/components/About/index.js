import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5 row">
      <div className="my-2 col">
      <h1 id="about">Who Am I?</h1>
        <p>
        I earned my BS in IT from Colorado Technical University in July of 2015. During that time is when I took introductory coding courses and completely fell in love with being able to create what ever I wanted. My end goal was to become a developer but that took a backseat because there seems to always be something more important than school. After nine years of working as a technical support engineer at two different start-ups, I was unexpectedly laid off. That is when the opportunity to join a full stack web development bootcamp appeared and for the first time there were no excuses for me not to join. Now with only a few weeks left, I will have finally earned a certificate as a full stack web developer.
        Throughout the bootcamp I learned how to use many frameworks and packages within my applications. Also during the course I was able to practice on my HTML, CSS and JavaScript coding skills. I learned how to create and implement web, third-party, and server-side APIs. I have implemented databases, and created applications by using ORM, OOP, and MVC processes.
      </p>
      </div>
      <img src={coverImage} className="my-2 col" style={{ width: "50%" }} alt="cover" />
    </section>
  )
}

export default About;