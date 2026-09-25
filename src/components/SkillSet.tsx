import React from 'react';
import { Container } from './Layout';

const Skills = () => {
  const skillCategories = [
    {
      title: "Engineering",
      items: ["AutoCAD", "Rhino 3D", "Maxsurf", "SolidWorks"]
    },
    {
      title: "Data Science",
      items: ["Python", "R", "MATLAB", "SQL"]
    },
    {
      title: "AI",
      items: ["TensorFlow", "PyTorch", "Scikit-learn"]
    },
  ];

  return (
    <section id="skills" className="bg-white py-12 md:py-20 px-4 md:px-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
          {/* Kolom Kiri: Judul Section */}
          <div className="md:col-span-3">
            <h2 className="text-[#0066FF] text-xs md:text-sm font-bold uppercase tracking-widest pt-1">
              SKILLS
            </h2>
          </div>

          {/* Kolom Kanan: Grid Kolom Kategori Skills */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
            {skillCategories.map((group, idx) => (
              <div key={idx} className="space-y-3">
                {/* Judul Sub-Kategori */}
                <h3 className="text-[#2D3748] text-xs md:text-sm font-bold uppercase tracking-wider">
                  {group.title}
                </h3>

                {/* List Item Skills */}
                <ul className="space-y-2">
                  {group.items.map((skill, sIdx) => (
                    <li 
                      key={sIdx} 
                      className="text-[#4A5568] text-sm md:text-[15px] font-normal leading-tight"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;