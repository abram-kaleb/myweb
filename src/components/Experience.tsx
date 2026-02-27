import React from 'react';
import { Container } from './Layout';
import { H1, T3 } from './Typography';

const Experience = () => {
  const experiences = [
    {
      date: "February 2026 - Now",
      company: "Hochschule Wismar, Rostock",
      role: "Lab Assistant"
    },
    {
      date: "August 2025 - October 2025",
      company: "Noris Automation, Rostock",
      role: "Test Bed Engineer (Internship)"
    },
    {
      date: "November 2024 - December 2024",
      company: "Amazon, Dummerstorf",
      role: "Warehouse Management (Internship)"
    },
    {
      date: "January 2023 - February 2023",
      company: "Meratus Group, Surabaya",
      role: "Crewing Management (Internship)"
    },
    {
      date: "January 2022 - February 2022",
      company: "Soechi Line, Jakarta",
      role: "Project Engineer (Internship)"
    },
    {
      date: "August 2021 - September 2021",
      company: "PT.DKB, Jakarta",
      role: "On The Job Training (Internship)"
    }
  ];

  return (
    <section id="experience" className="bg-white py-20">
      <Container>
        <H1 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          Experience
        </H1>

        <div className="space-y-6 md:space-y-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-0 items-baseline">
              <div className="md:col-span-3">
                <T3 className="text-gray-500 font-medium text-[11px] md:text-[12px] uppercase tracking-wide">
                  {exp.date}
                </T3>
              </div>

              <div className="md:col-span-4">
                <T3 className="text-black font-black text-[12px] md:text-[14px] uppercase tracking-tighter">
                  {exp.company}
                </T3>
              </div>

              <div className="md:col-span-5">
                <T3 className="text-gray-600 font-medium text-[12px] md:text-[13px]">
                  {exp.role}
                </T3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;