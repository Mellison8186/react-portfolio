import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {

  return (
    <section className="my-5 row">
      <div className="my-2 col">
      <h1 id="about">Who Am I?</h1>
        <p>
        I earned a BS in Information Technology eight years ago and I have been working in the technical support field for over 10 years. Ever since I had introductory courses to coding and it was at that time that I knew becoming a full stack web developer was passion. It wasn't until I was laid off that I finally took the leap of faith and enrolled in a coding bootcamp. I will earn my full stack web development certificate in four weeks and couldn't be happier.
      </p>
      </div>
      <img src={coverImage} className="my-2 col" style={{ width: "50%" }} alt="cover" />
    </section>
  )
}

export default About;