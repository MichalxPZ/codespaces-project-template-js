/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/istockphoto-1009803562-1024x1024.jpg";

const imageAltText = "peaople climbing a mountain";

/**
 * Sort description that expands on your title on the Home component.
 */
const description = "I'm Michał Zieliński, a Fullstack Developer and tech enthusiast who started coding in high school. Pursuing my passion, I became an IT student at Poznan University of Technology. Joining AKAI, the university's research club, was a turning point. I led the mobile section and now proudly serve as the Chairman.\n\n\nBeing a Code Connector excites me the most - uniting people through shared goals in programming. AKAI Code, a hackathon I organized, brought together over 200 bright minds to tackle real-world challenges with technology.\n\n\nCurrently, I work as a Fullstack Developer at Beone, crafting efficient solutions for companies to manage and store their documents. The satisfaction of solving complex problems through programming is incomparable.\nBeyond coding, I'm a F1 and gym freak, a book lover, and an aspiring chef. Let's discuss exciting tech projects and ideas - I'm all ears!"
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Kotlin",
  "Java",
  "Spring Boot",
  "Microservices",
  "Android",
  "Azure",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my development experience I continually look for new and better ways to make tech be the reason for change.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
