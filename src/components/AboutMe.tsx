import React from 'react';
import { Container } from './Layout';

const AboutMe = () => {
  return (
    <section id="about" className="bg-white my-12 md:my-20 px-4 md:px-0 pt-20">
      <Container>
        <div className="max-w-3xl">
          {/* Sapaan Atas */}
          <p className="text-gray-700 text-xl md:text-3xl font-normal mb-3">
            Hello! 👋
          </p>

          {/* Deskripsi Utama */}
          <h1 className="text-gray-700 text-xl sm:text-2xl md:text-4xl leading-relaxed md:leading-relaxed font-normal tracking-tight">
            I'm <span className="font-bold text-gray-900">Abraham</span>, a marine engineering and data science specialist combining expertise in marine systems, big data/AI analytics, and project management in the maritime industry
          </h1>

          {/* Kontak / Call to Action */}
          <p className="text-gray-700 text-base md:text-lg font-normal pt-6 flex flex-wrap items-center gap-1">
            <span>Get in touch 👉</span>{' '}
            <a 
              href="mailto:manulangabraham@gmail.com" 
              className="text-gray-900 underline underline-offset-4 decoration-1 hover:text-black transition-colors break-all"
            >
              manulangabraham@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;