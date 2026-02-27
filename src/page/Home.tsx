import React, { useState } from 'react';
import Header from '../components/Header';
import Project from '../components/Project';
import AboutMe from '../components/AboutMe';
import SkillSet from '../components/SkillSet';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certification from '../components/Certification';
import Footer from '../components/Footer';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      id: "01",
      category: "Development of a",
      title: "Digital Twin Framework for Predictive Maintenance in Maritime Systems",
      image: "",
      sideLabel: "Digital Twin"
    },
    {
      id: "02",
      category: "Ship Design",
      title: "General Arrangement, Safety Plan, Machinery, and Electrical System",
      image: "",
      sideLabel: "Ship Design"
    },
    {
      id: "03",
      category: "Development of",
      title: "Ship Navigation, Engine, and Electrical Simulator",
      image: "",
      sideLabel: "Simulation"
    },
    {
      id: "04",
      category: "Fleet Management",
      title: "Real-time Monitoring Dashboard for Global Maritime Logistics",
      image: "",
      sideLabel: "Management"
    }
  ];

  return (
    <main className="bg-white">
      <Header />

      <section id="projects">
        <Project
          projects={projects}
          activeIndex={activeIndex}
          onSelectProject={(index) => setActiveIndex(index)}
        />
      </section>

      <section id="about">
        <AboutMe />
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