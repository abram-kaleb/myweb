import React, { useState, useEffect } from 'react';
import { Container } from './Layout';
import { T3 } from './Typography';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const socialLinks = [
    { label: 'Email', href: 'mailto:manulangabraham@gmail.com' },
    { label: 'Github', href: 'https://github.com/abram-kaleb' },
    { label: 'Linkedin', href: 'https://linkedin.com/in/abramkaleb' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwEBFS1KhVVWJo7rJuszEmkDPSVBPfUfuQRL61Aml2k1q_pXzl75VgF4lnooGd-YfDZ/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      setStatus('success');
      form.reset();
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
      }, 2000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer id="contact" className="bg-black py-10 border-t border-white/5 relative">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <h2 className="text-xl font-black tracking-tighter uppercase leading-none text-white text-center md:text-left">
              ABRAM<span className="text-[#F2E500] not-italic">KALEB</span>
            </h2>
            <div className="flex gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[10px] font-bold uppercase tracking-widest hover:text-[#F2E500] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            {isOpen && (
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] lg:hidden animate-in fade-in duration-300"
                onClick={() => setIsOpen(false)}
              />
            )}

            <div className={`
              fixed lg:absolute z-[200] bg-white shadow-2xl transition-all duration-500 ease-in-out overflow-hidden
              inset-x-4 top-1/2 -translate-y-1/2 lg:inset-auto lg:top-auto
              lg:bottom-0 lg:right-0 lg:translate-y-0 lg:w-[350px]
              ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
            `}>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <T3 className="text-black font-black text-[10px] uppercase tracking-widest">
                    {status === 'success' ? 'Sent to Sheet!' : status === 'error' ? 'Error Occurred' : 'Send Message'}
                  </T3>
                  <button onClick={() => setIsOpen(false)} className="text-black text-2xl p-2">&times;</button>
                </div>

                {status === 'success' ? (
                  <div className="py-10 text-center animate-in fade-in zoom-in">
                    <div className="text-[#F2E500] text-4xl mb-4">✓</div>
                    <T3 className="text-black font-bold text-[10px] uppercase tracking-widest">Message sent</T3>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                    <input
                      name="name"
                      type="text"
                      placeholder="NAME"
                      required
                      className="w-full border-b border-gray-100 py-3 text-[10px] font-bold tracking-widest focus:border-black outline-none text-black bg-transparent"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="EMAIL"
                      required
                      className="w-full border-b border-gray-100 py-3 text-[10px] font-bold tracking-widest focus:border-black outline-none text-black bg-transparent"
                    />
                    <textarea
                      name="message"
                      placeholder="MESSAGE"
                      rows={4}
                      required
                      className="w-full border-b border-gray-100 py-3 text-[10px] font-bold tracking-widest focus:border-black outline-none text-black resize-none bg-transparent"
                    />
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-black text-white py-5 mt-4 text-[10px] font-black uppercase tracking-widest hover:bg-[#F2E500] hover:text-black transition-all disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Submit Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative z-[90] ${isOpen ? 'opacity-0 pointer-events-none' : 'bg-white text-black hover:bg-[#F2E500]'
                }`}
            >
              Send me a message
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <div className="flex gap-4 md:gap-8">
            {['Imprint', 'Data Protection', 'Privacy Setting'].map((link) => (
              <T3 key={link} className="text-[7px] md:text-[8px] text-gray-600 font-bold uppercase tracking-widest hover:text-white cursor-pointer transition-colors">
                {link}
              </T3>
            ))}
          </div>
          <T3 className="text-[7px] md:text-[8px] text-gray-800 font-bold uppercase tracking-[0.4em] text-center">
            © {currentYear} — ALL RIGHTS RESERVED
          </T3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;