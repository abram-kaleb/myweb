import React, { useState, useEffect } from 'react';
import { T3, H1 } from './Typography';

interface ProjectItem {
  id: string;
  category: string;
  title: string;
  image: string;
  sideLabel: string;
}

interface ProjectProps {
  projects: ProjectItem[];
  activeIndex: number;
  onSelectProject: (index: number) => void;
}

const Project = ({ projects, activeIndex, onSelectProject }: ProjectProps) => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const sideColors = ["bg-[#B3B3B3]", "bg-[#2D2D2D]", "bg-[#8B0000]", "bg-[#0A2A43]"];

  const handleProjectClick = (index: number) => {
    if (index === activeIndex) return;
    setIsTextVisible(false);
    onSelectProject(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="mt-32 h-[400px] md:h-[500px] w-full flex overflow-hidden bg-black">
      {projects.map((proj, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={proj.id}
            onClick={() => handleProjectClick(index)}
            className={`relative h-full transition-[flex] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden ${
              isActive ? 'flex-[20] md:flex-[10] cursor-default' : 'flex-[1.5] md:flex-[0.15] min-w-[40px] md:min-w-[50px]'
            } ${sideColors[index % sideColors.length]}`}
          >
            <div
              className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-500 ${
                isActive ? 'blur-0 scale-100 opacity-100' : 'blur-md scale-105 opacity-20'
              }`}
              style={{ backgroundImage: `url('${proj.image}')` }}
            />

            <div className={`absolute inset-0 z-10 bg-black/60 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-90'}`} />

            <div
              className={`relative z-20 h-full flex flex-col justify-center px-6 md:px-16 ${
                isActive && isTextVisible
                  ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out'
                  : 'opacity-0 pointer-events-none transition-none'
              }`}
            >
              <T3 className="text-white block mb-2 tracking-[0.3em] md:tracking-[0.4em] uppercase font-black text-[9px] md:text-[11px]">
                {proj.category}
              </T3>

              <H1 className="text-white max-w-2xl leading-[1.2] md:leading-[1.1] text-lg md:text-2xl mb-6 font-black italic uppercase tracking-tighter">
                {proj.title}
              </H1>

              <button className="bg-[#F2E500] w-fit px-6 md:px-8 py-2 md:py-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>

            <div className="absolute inset-0 z-30 flex flex-col items-center justify-between py-6 md:py-8 pointer-events-none">
              <T3 className="text-white text-[11px] md:text-[13px] font-black tracking-tighter drop-shadow-lg opacity-100">
                {proj.id}
              </T3>

              {!isActive && (
                <>
                  <span className="rotate-[-90deg] text-[8px] md:text-[9px] text-white whitespace-nowrap uppercase tracking-[0.2em] md:tracking-[0.3em] font-black">
                    {proj.sideLabel}
                  </span>
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[#F2E500] rotate-45 shadow-[0_0_10px_rgba(242,229,0,1)]" />
                </>
              )}

              {isActive && <div className="h-1 w-1 bg-transparent" />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;