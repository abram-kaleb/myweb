import React from 'react';
import { Container } from './Layout';

// Import Gambar Showcase Project (Ganti dengan path gambar kamu)
import projectBlistabloc from '../assets/projects/monitor.png';
import projectScreentime from '../assets/projects/simulator.png';
import projectDrawing from '../assets/projects/cad.png';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

const Projects = () => {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "MAN 6L 21/30 Digital Twin Monitoring Dashboard",
      description: "This project is a real-time industrial monitoring dashboard designed for the MAN 6L 21/30 engine. It features an interactive 3D model alongside comprehensive engine telemetry indicators. The interface integrates active alarm tracking, operational health scoring, status analytics, and trend chart visualizations to support predictive maintenance and efficient engine performance monitoring.",
      imageUrl: projectBlistabloc,
      link: "https://abram-kaleb.github.io/ackerman2026" // Masukkan URL link proyek di sini
    },
    {
      id: 2,
      title: "MAN 6L 21/30 Digital Twin Simulation Dashboard",
      description: "An interactive real-time simulation panel designed to model engine operational metrics under varying loads. By enabling dynamic adjustment of input variables like engine speed and braking power, this dashboard allows testing, predictive modeling, and performance evaluation for industrial engines.",
      imageUrl: projectScreentime,
      link: "https://abram-kaleb.github.io/ackerman2026"
    },
    {
      id: 3,
      title: "Vessel General Arrangement (CAD)",
      description: "A technical 2D CAD detailing the General Arrangement (GA) plan of a cargo vessel. The drawing includes comprehensive side views, deck layouts, hull profiles, cross-sections, and principal dimension tables for naval architecture design and ship construction planning.",
      imageUrl: projectDrawing,
      link: "https://abram-kaleb.github.io/rineji4/"
    }
  ];

  return (
    <section id="projects" className="bg-white md:py-16 py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Kolom Kiri: Judul Section */}
          <div className="md:col-span-3">
            <h2 className="text-[#0066FF] text-xs md:text-sm font-bold uppercase tracking-widest pt-1">
              FEATURED PROJECTS
            </h2>
          </div>

          {/* Kolom Kanan: List Projects */}
          <div className="md:col-span-9 space-y-16 md:space-y-24">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="grid grid-cols-1 md:grid-cols-9 gap-6 md:gap-8 items-center"
              >
                {/* Gambar Showcase Project */}
                <div className="md:col-span-6">
                  {project.link ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block overflow-hidden rounded group"
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                      />
                    </a>
                  ) : (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                    />
                  )}
                </div>

                {/* Deskripsi Project di Samping Kanan Gambar */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <h3 className="text-base md:text-lg font-bold text-[#2D3748] mb-2 leading-snug">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-[#0066FF] transition-colors"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-[#718096] text-xs md:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Section Link Tambahan */}
                  {project.link && (
                    <div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;