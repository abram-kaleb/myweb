import React from 'react';
import { Container } from './Layout';
import { T3, H1 } from './Typography';

const SkillSet = () => {
  const skills = [
    {
      category: "Marine Engineering Systems",
      items: ["AutoCAD", "Rhino 3D", "Maxsurf", "MATLAB/Simulink"]
    },
    {
      category: "Digital Twin Architecture",
      items: ["Python", "SQL", "React", "PLC", "MQTT"]
    },
    {
      category: "Data/Algorithms",
      items: ["Sensor Fusion", "Isolation Forest", "Neural Network"]
    }
  ];

  return (
    <section id="skills" className="bg-white py-20">
      <Container>
        <H1 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          Skill Set
        </H1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
          {skills.map((group, idx) => (
            <div key={idx} className="border border-gray-200 flex flex-col h-full">
              <div className="p-6 border-b border-gray-200 flex-grow-0 min-h-[100px] flex items-center justify-center text-center">
                <T3 className="text-black font-black text-[11px] uppercase tracking-widest leading-tight">
                  {group.category}
                </T3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 flex-grow">
                {group.items.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className={`p-4 border-r border-b border-gray-200 flex items-center justify-center text-center last:border-r-0 ${
                      skill === "MATLAB/Simulink" ? "col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    <T3 className="text-black font-bold text-[9px] md:text-[10px] uppercase tracking-tighter leading-tight">
                      {skill}
                    </T3>
                  </div>
                ))}
                {[...Array(Math.max(0, 6 - group.items.length))].map((_, i) => (
                  <div key={`filler-${i}`} className="p-4 border-r border-b border-gray-100 last:border-r-0" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillSet;