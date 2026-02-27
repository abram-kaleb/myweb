import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: LayoutProps) => (
  <div className={`max-w-[1200px] mx-auto px-12 ${className}`}>
    {children}
  </div>
);

export const Section = ({ children, className = "" }: LayoutProps) => (
  <section className={`py-12 ${className}`}>
    {children}
  </section>
);

export const FlexRow = ({ children, className = "" }: LayoutProps) => (
  <div className={`flex flex-col md:flex-row ${className}`}>
    {children}
  </div>
);