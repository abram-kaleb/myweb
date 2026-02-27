import React from 'react';
import { Container } from './Layout';
import { H1 } from './Typography';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <Container>
        <div className="max-w-5xl">
          {/* Nama Gede sesuai Gambar */}
          <H1 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-10">
            Abraham Kaleb Martua Manulang
          </H1>

          {/* Deskripsi Minimalis */}
          <div className="max-w-3xl">
            <p className="text-gray-700 text-[13px] md:text-[15px] leading-relaxed font-medium">
              I am a final-semester Master of Science student in Operation and Management of Maritime Systems, 
              with a focus on Ship Technology. My specialization integrates engineering and technical management of ships, 
              with particular interest in analysis, decision-making, and practical implementation. 
              I am open to freelance and professional opportunities within this domain.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;