import React, { useState, useEffect } from 'react';
import { Container } from './Layout';
import { T3 } from './Typography';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const sections = [
      'projects', 'about', 'skills', 'education',
      'experience', 'certifications', 'contact'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-100px 0px -40% 0px"
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { label: 'Projects', target: 'projects' },
    { label: 'About', target: 'about' },
    { label: 'Skillset', target: 'skills' },
    { label: 'Education', target: 'education' },
    { label: 'Experience', target: 'experience' },
    { label: 'Certification', target: 'certifications' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setIsMenuOpen(false);
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getActiveLabel = () => {
    const activeItem = navItems.find(item => item.target === activeSection);
    return activeItem ? activeItem.label : 'Home';
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <Container>
        <div className="flex justify-between items-center relative z-[102]">
          <div className={`transition-all duration-500 ${isScrolled && !isMenuOpen ? 'opacity-0 -translate-x-10 pointer-events-none w-0' : 'opacity-100 translate-x-0'}`}>
            <h1 className="text-xl font-black tracking-tighter uppercase leading-none text-black whitespace-nowrap">
              ABRAM<span className="text-[#F2E500] not-italic">KALEB</span>
            </h1>
          </div>

          <div className={`lg:hidden flex-1 flex justify-center transition-all duration-500 ${isScrolled && !isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <span key={activeSection} className="text-[10px] font-black uppercase tracking-[0.3em] text-[#000000] animate-in fade-in zoom-in duration-300">
              {getActiveLabel()}
            </span>
          </div>

          <nav className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.target)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative py-1 ${activeSection === item.target ? 'text-[#000000]' : 'text-black hover:text-[#F2E500]'
                  }`}
              >
                {item.label}
                {activeSection === item.target && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#000000] animate-in fade-in slide-in-from-left-1" />
                )}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          <div className={`hidden lg:block transition-all duration-500 ${isScrolled ? 'opacity-0 translate-x-10 pointer-events-none w-0' : 'opacity-100 translate-x-0'}`}>
            <div className="text-right">
              <span className="text-[10px] font-black uppercase tracking-widest block text-black">Germany (EN)</span>
            </div>
          </div>
        </div>

        <div className={`lg:hidden fixed inset-0 h-screen bg-white transition-all duration-500 z-[101] ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.target)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${activeSection === item.target ? 'text-[#F2E500]' : 'text-black'
                  }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 h-px w-8 bg-gray-100" />
            <T3 className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.4em]">Germany (EN)</T3>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;