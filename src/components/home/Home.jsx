import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";


const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>
                    <Data />
                </div>
            </div>
            <div className="home__about">

                <h2>A Little About Me</h2>
                <p>
                    I'm a full-stack software engineer with a strong foundation in computer science and a passion for building clean, scalable, and impactful web applications. After earning my B.S. in Computer Science from Temple University, I dove deep into the world of engineering, where I've had the opportunity to work across front-end and back-end systems using modern tools like React, TypeScript, Python, Java, and Node.js. Right now, I’m working at Perficient, where I help clients bring ideas to life through thoughtful engineering and performance-driven design.
                </p>
                <h2>What I Do</h2>
                <p>
                    I thrive on working across the full stack — from crafting sleek, user-friendly interfaces to architecting efficient and reliable APIs. I’m especially passionate about projects that combine intuitive design with performance under the hood. Whether it’s optimizing SQL queries for faster load times, improving bounce rates through better UX, or building GraphQL hooks for complex data flows, I love working through both the technical and user-centric sides of the equation. I care a lot about clean code, maintainability, and test coverage — and I’m always looking for ways to level up both my craft and the experience of the end user.
                </p>
                <h2>Recent Work</h2>
                <p>
                    Most recently, I’ve been helping large-scale clients launch e-commerce platforms and enterprise applications. At Perficient, I built and deployed modern, responsive UI components with React and Next.js, implemented GraphQL integrations, and contributed to performance improvements across back-end APIs and front-end bundles. Before that, I was at Celadon, where I developed custom PWA storefronts, handled AWS deployments, and collaborated directly with clients to scale their platforms. I also led a capstone project called Pill.io, a smart pill-dispensing system powered by facial recognition — it earned second place in my department’s final showcase.
                </p>
                
            </div>
        </section>
    );
};

export default Home;