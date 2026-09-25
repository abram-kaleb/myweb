import React from 'react';
import { Container } from './Layout';

const Background = () => {
  return (
    <section id="background" className="bg-white py-12 md:py-20 px-4 md:px-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
          {/* Kolom Kiri: Judul Section */}
          <div className="md:col-span-3">
            <h2 className="text-[#0066FF] text-xs md:text-sm font-bold uppercase tracking-widest pt-1">
              BACKGROUND
            </h2>
          </div>

          {/* Kolom Kanan: Konten Paragraf */}
          <div className="md:col-span-9 space-y-5 md:space-y-6 text-[#4A5568] text-base md:text-lg font-normal leading-relaxed">
            <p>
              I'm currently a Research Assistant at{' '}
              <span className="font-bold text-[#2D3748]">Hochschule Wismar</span> building
              digital twin for the MAN 6L 21/30. I recently graduated from{' '}
              <span className="font-bold text-[#2D3748]">
                Hochschule Wismar
              </span>{' '}
              after completing various internships at{' '}
              <span className="font-bold text-[#2D3748]">Noris Automation</span>,{' '}
              <span className="font-bold text-[#2D3748]">Meratus Lines</span>, and{' '}
              <span className="font-bold text-[#2D3748]">Soechi Lines</span>.
            </p>

            <p>
              As a marine engineer, I passionly bridge the gap between marine engineering and data science — combining technical expertise with a sharp eye for design to drive sustainable maritime projects. My ultimate goal is to become a leading professional in the maritime sector
            </p>

           
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Background;