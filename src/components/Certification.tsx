import React, { useState } from 'react';
import { Container } from './Layout';
import { H1 } from './Typography';

const Certification = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const certs = [
    { id: 1, title: "Maritime Safety Certificate", img: "" },
    { id: 2, title: "Advanced Ship Design", img: "" },
    { id: 3, title: "Digital Twin Professional", img: "" },
    { id: 4, title: "Project Management", img: "" }
  ];

  return (
    <section id="certifications" className="bg-white py-20">
      <Container>
        <H1 className="text-black text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12">
          Certification
        </H1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certs.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedImg(cert.img)}
              className="aspect-[3/4] border border-gray-200 cursor-pointer overflow-hidden group relative bg-gray-50"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-black text-[10px] uppercase tracking-widest">View</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImg && (
          <div
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-10 right-10 text-white text-4xl font-light"
              onClick={() => setSelectedImg(null)}
            >
              ×
            </button>
            <img
              src={selectedImg}
              className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in duration-300"
              alt="Certification Preview"
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Certification;