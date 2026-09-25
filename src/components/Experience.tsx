import React from 'react';
import { Container } from './Layout';

const Experience = () => {
  const experiences = [
    {
      date: "Jun 2026 - Present",
      company: "Hochschule Wismar",
      role: "Research Assistant",
      url: "https://www.hs-wismar.de"
    },
    {
      date: "Aug 2025 - Oct 2025",
      company: "Noris Automation",
      role: "Working Student",
      url: "https://www.noris-group.com"
    },
    {
      date: "Jan 2023 - Apr 2023",
      company: "Meratus Group",
      role: "Engineering Assistant (Internship)",
      url: "https://www.meratusline.com"
    },
    {
      date: "Jan 2022 - Apr 2022",
      company: "Soechi Lines",
      role: "Project Engineer Assistant (Internship)",
      url: "https://www.soechi.com"
    },
    {
      date: "Jul 2021 - Sep 2021",
      company: "Dok Kodja Bahari",
      role: "On The Job Training (Internship)",
      url: "https://dkb.co.id/"
    }
  ];

  return (
    <section id="experience" className="bg-white py-12 md:py-20 px-4 md:px-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
          {/* Kolom Kiri: Judul Section */}
          <div className="md:col-span-3">
            <h2 className="text-[#0066FF] text-xs md:text-sm font-bold uppercase tracking-widest pt-1">
              EXPERIENCE
            </h2>
          </div>

          {/* Kolom Kanan: List Pengalaman */}
          <div className="md:col-span-9 space-y-6 md:space-y-8">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-6"
              >
                {/* Perusahaan & Jabatan (Kiri/Atas) */}
                <div className="space-y-1">
                  <h3 className="text-base md:text-[17px] font-bold leading-snug">
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2D3748] hover:text-[#0066FF] transition-colors duration-200"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <p className="text-[#718096] text-sm md:text-[15px] font-normal">
                    {exp.role}
                  </p>
                </div>

                {/* Tanggal / Periode (Kanan/Bawah di HP) */}
                <div className="sm:text-right shrink-0">
                  <span className="text-[#A0AEC0] text-xs md:text-sm font-medium tracking-wide font-mono">
                    {exp.date}
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

export default Experience;