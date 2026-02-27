import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className = "" }: TextProps) => (
  <h1 className={`text-3xl md:text-4xl font-bold tracking-tight text-black uppercase ${className}`}>
    {children}
  </h1>
);

export const H2 = ({ children, className = "" }: TextProps) => (
  <h2 className={`text-2xl font-bold text-black ${className}`}>
    {children}
  </h2>
);

export const H3 = ({ children, className = "" }: TextProps) => (
  <h3 className={`text-lg font-bold text-black uppercase tracking-wider ${className}`}>
    {children}
  </h3>
);

export const T1 = ({ children, className = "" }: TextProps) => (
  <p className={`text-sm md:text-base text-gray-800 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const T2 = ({ children, className = "" }: TextProps) => (
  <p className={`text-xs text-gray-600 leading-normal ${className}`}>
    {children}
  </p>
);

export const T3 = ({ children, className = "" }: TextProps) => (
  <span className={`text-[10px] font-bold uppercase tracking-widest text-black ${className}`}>
    {children}
  </span>
);