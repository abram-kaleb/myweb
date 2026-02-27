import React from 'react';
import { H1, T1, T3 } from './Typography';
import { Section } from './Layout';

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  label?: string;
}

const Hero = ({ title, subtitle, label }: HeroProps) => {
  return (
    <Section>
      {label && <T3 className="block mb-8">{label}</T3>}
      <H1 className="mb-10 max-w-2xl">{title}</H1>
      <T1 className="max-w-xl">{subtitle}</T1>
    </Section>
  );
};

export default Hero;