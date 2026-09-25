import React from 'react';
import { Container } from './Layout';

const Education = () => {
  const educationData = [
    {
      period: "Sep 2023 - Aug 2026",
      institution: "Hochschule Wismar",
      degree: "M.Sc. in Operation and Management of Maritime Systems",
      url: "https://www.hs-wismar.de"
    },
    {
      period: "Sep 2019 - Sep 2023",
      institution: "Sepuluh Nopember Institute of Technology & Hochschule Wismar",
      degree: "B.Eng. in Marine Engineering",
      url: "https://www.its.ac.id"
    }
  ];

  return (
    <section id="education" className="bg-white py-12 md:py-20 px-4 md:px-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
          {/* Kolom Kiri: Judul Section */}
          <div className="md:col-span-3">
            <h2 className="text-[#0066FF] text-xs md:text-sm font-bold uppercase tracking-widest pt-1">
              EDUCATION
            </h2>
          </div>

          {/* Kolom Kanan: List Pendidikan */}
          <div className="md:col-span-9 space-y-6 md:space-y-8">
            {educationData.map((edu, idx) => (
              <div 
                key={idx} 
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-6"
              >
                {/* Institusi & Gelar (Kiri/Atas) */}
                <div className="space-y-1">
                  <h3 className="text-base md:text-[17px] font-bold leading-snug">
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2D3748] hover:text-[#0066FF] transition-colors duration-200"
                    >
                      {edu.institution}
                    </a>
                  </h3>
                  <p className="text-[#718096] text-sm md:text-[15px] font-normal">
                    {edu.degree}
                  </p>
                </div>

                {/* Periode (Kanan/Bawah di HP) */}
                <div className="sm:text-right shrink-0">
                  <span className="text-[#A0AEC0] text-xs md:text-sm font-medium tracking-wide font-mono">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Education;