import React from 'react';
import { Container } from './Layout';

// Import Gambar PNG
import imgPython from '../assets/sertif/python.png';
import imgIsm from '../assets/sertif/ism.png';
import imgClimate from '../assets/sertif/climate.png';
import imgAutocad from '../assets/sertif/autocad.png';

// Import File PDF
import certPython from '../assets/sertif/python.pdf';
import certIsm from '../assets/sertif/ism.pdf';
import certClimate from '../assets/sertif/climate.pdf';
import certAutocad from '../assets/sertif/autocad.pdf';

interface CertItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imgUrl: string;
  pdfUrl: string;
}

const Certification = () => {
  const certs: CertItem[] = [
    {
      id: 1,
      title: "Python Programming Certificate",
      issuer: "Coursera / University of Michigan",
      date: "2024",
      imgUrl: imgPython,
      pdfUrl: certPython
    },
    {
      id: 2,
      title: "ISM Code Internal Auditor",
      issuer: "Maritime Training Center",
      date: "2023",
      imgUrl: imgIsm,
      pdfUrl: certIsm
    },
    {
      id: 3,
      title: "Climate Change & Sustainability",
      issuer: "Environmental Institute",
      date: "2023",
      imgUrl: imgClimate,
      pdfUrl: certClimate
    },
        {
      id: 4,
      title: "Autocad",
      issuer: "Decimo CAD",
      date: "2019",
      imgUrl: imgAutocad,
      pdfUrl: certAutocad
    }
  ];

  return (
    <section id="certifications" className="bg-white md:py-12 py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Kolom Kiri: Judul Section */}
          <div className="md:col-span-3">
            <h2 className="text-[#0066FF] text-xs md:text-sm font-bold uppercase tracking-widest pt-1">
              CERTIFICATIONS
            </h2>
          </div>

          {/* Kolom Kanan: Layout Grid Minimalis */}
          <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certs.map((cert) => (
              <a
                key={cert.id}
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-100 rounded-lg p-3 bg-white hover:border-[#0066FF] transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                {/* Frame Gambar Full PNG (object-contain agar terlihat utuh) */}
                <div className="w-full h-48 bg-gray-50 rounded overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={cert.imgUrl}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Detail Sertifikat di Bawah Gambar */}
                <div className="mt-3 pt-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm md:text-base font-bold text-[#2D3748] group-hover:text-[#0066FF] transition-colors leading-snug">
                      {cert.title}
                      <span className="inline-block ml-1 text-xs text-[#A0AEC0] group-hover:text-[#0066FF] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </h3>
                    <span className="text-[#A0AEC0] text-xs font-mono shrink-0">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-[#718096] text-xs md:text-sm mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certification;