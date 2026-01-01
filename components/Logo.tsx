import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const LOGO_URL = "https://i.ibb.co/FqwTJXfW/Frame-1-6.png";

export const Logo: React.FC<LogoProps> = ({ className = "w-64 h-64" }) => {
  return (
    <img 
      src={LOGO_URL} 
      alt="Second Order Logo" 
      className={`object-contain ${className}`}
    />
  );
};

export const SmallLogo: React.FC<{ className?: string }> = ({ className = "w-16 h-16" }) => (
    <img 
      src={LOGO_URL} 
      alt="Second Order Logo" 
      className={`object-contain ${className}`}
    />
);