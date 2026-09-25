import React, { useState } from 'react';
import Header from '../components/Header';
import Project from '../components/Project';
import AboutMe from '../components/AboutMe';
import SkillSet from '../components/SkillSet';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certification from '../components/Certification';
import Footer from '../components/Footer';
import Background from '../components/Background';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

   return (
    <main className="bg-white">
      <Header />

      <section id="about">
        <AboutMe />
      </section>

      <section id="background">
        <Background />
      </section>


      <section id="skills">
        <SkillSet />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experience />
      </section>

            <section id="projects">
        <Project/>
      </section> 

      <section id="certifications">
        <Certification />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
};

export default Home;