import React from 'react';
import { Container } from './Layout';
import { H1, T3 } from './Typography';

const Education = () => {
  const educationData = [
    {
      period: "September 2023 - Now",
      institution: "Hochschule Wismar, Rostock",
      degree: "Master of Operation and Management of Maritime Systems"
    },
    {
      period: "September 2019 - September 2019",
      institution: "Sepuluh Nopember Institute of Technology",
      degree: "Bachelor of Marine Engineering (Double Degree)"
    }
  ];

  return (
    <section id="education" className="bg-white py-20">
      <Container>
        <H1 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          Education
        </H1>

        <div className="space-y-12">
          {educationData.map((edu, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 items-baseline">
              {/* Period */}
              <div className="md:col-span-3">
                <T3 className="text-gray-500 font-medium text-[12px] uppercase tracking-wide">
                  {edu.period}
                </T3>
              </div>

              {/* Institution */}
              <div className="md:col-span-4">
                <T3 className="text-black font-black text-[13px] md:text-[14px] uppercase tracking-tighter">
                  {edu.institution}
                </T3>
              </div>

              {/* Degree */}
              <div className="md:col-span-5">
                <T3 className="text-gray-600 font-medium text-[13px] leading-snug">
                  {edu.degree}
                </T3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;