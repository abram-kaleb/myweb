import React, { useState, useEffect } from 'react';
import { Container } from './Layout';

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
      await fetch(
         'https://script.google.com/macros/s/AKfycbx6a26o_DO1qTGm43S8F31ireuAht5P3OTO2P0ueK1dnnvomJksmIfm9DI03u_pLOMjeQ/exec',
       
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        }
      );
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
    <footer id="contact" className="bg-white py-12 md:py-16 border-t border-gray-100 relative">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand & Social Links */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <h2 className="text-xl font-bold tracking-tight uppercase leading-none text-[#2D3748] text-center md:text-left">
              Abraham <span className="text-[#0066FF]"> Manulang</span>
            </h2>
            <div className="flex gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#718096] text-xs font-bold uppercase tracking-widest hover:text-[#0066FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Pop-up Container */}
          <div className="relative">
            {/* Backdrop Modal Mobile */}
            {isOpen && (
              <div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150] lg:hidden animate-in fade-in duration-300"
                onClick={() => setIsOpen(false)}
              />
            )}

            {/* Modal Form Pop-up */}
            <div
              className={`
                fixed lg:absolute z-[200] bg-white border border-gray-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden rounded-lg
                inset-x-4 top-1/2 -translate-y-1/2 lg:inset-auto lg:top-auto
                lg:bottom-0 lg:right-0 lg:translate-y-0 lg:w-[360px]
                ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
              `}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-3">
                  <span className="text-[#0066FF] font-bold text-xs uppercase tracking-widest">
                    {status === 'success'
                      ? 'Sent Successfully!'
                      : status === 'error'
                      ? 'Error Occurred'
                      : 'Send Message'}
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-black text-xl leading-none"
                  >
                    &times;
                  </button>
                </div>

                {status === 'success' ? (
                  <div className="py-8 text-center animate-in fade-in zoom-in">
                    <div className="text-[#0066FF] text-3xl mb-2">✓</div>
                    <span className="text-[#2D3748] font-bold text-xs uppercase tracking-widest">
                      Message Sent!
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="honeypot"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                    <input
                      name="name"
                      type="text"
                      placeholder="YOUR NAME"
                      required
                      className="w-full border-b border-gray-200 py-2.5 text-xs font-medium tracking-wide focus:border-[#0066FF] outline-none text-[#2D3748] bg-transparent transition-colors placeholder:text-gray-400"
                    />
                    <input
                      name="email"
                      type="email"
                      placeholder="YOUR EMAIL"
                      required
                      className="w-full border-b border-gray-200 py-2.5 text-xs font-medium tracking-wide focus:border-[#0066FF] outline-none text-[#2D3748] bg-transparent transition-colors placeholder:text-gray-400"
                    />
                    <textarea
                      name="message"
                      placeholder="YOUR MESSAGE"
                      rows={4}
                      required
                      className="w-full border-b border-gray-200 py-2.5 text-xs font-medium tracking-wide focus:border-[#0066FF] outline-none text-[#2D3748] resize-none bg-transparent transition-colors placeholder:text-gray-400"
                    />
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-[#0066FF] text-white py-3.5 mt-2 text-xs font-bold uppercase tracking-widest rounded hover:bg-[#0052CC] transition-all disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Submit Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className={`px-6 py-3.5 border border-[#0066FF] text-[#0066FF] text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 relative z-[90] ${
                isOpen
                  ? 'opacity-0 pointer-events-none'
                  : 'hover:bg-[#0066FF] hover:text-white'
              }`}
            >
              Send me a message
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;