import React from 'react';
import { H2, T2 } from './Typography';

interface CardProps {
  title: string;
  description: string;
  number: string;
}

const Card = ({ title, description, number }: CardProps) => {
  return (
    <div className="group py-10 border-t border-gray-100 flex flex-col md:flex-row md:items-start gap-4 md:gap-20 transition-all hover:pl-4">
      <span className="text-[10px] font-mono text-gray-300 pt-2">{number}</span>
      <div className="flex-1">
        <H2 className="mb-2 group-hover:text-blue-600 transition-colors">{title}</H2>
        <T2 className="max-w-md">{description}</T2>
      </div>
      <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default Card;