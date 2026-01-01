import React from 'react';
import { CornerArrow } from './Icons';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'text' | 'red' | 'red-outline';
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
    children, 
    variant = 'outline', 
    className = "", 
    onClick,
    fullWidth = false 
}) => {
  const baseStyles = "relative font-mono uppercase text-[11px] tracking-[0.15em] py-3 px-6 transition-all duration-300 flex items-center justify-between group overflow-hidden";
  
  // Minimalist Black & White styles
  const outlineStyles = "border border-black text-black hover:bg-black hover:text-white bg-transparent";
  const primaryStyles = "bg-black text-white border border-black hover:bg-white hover:text-black";
  const textStyles = "border-b border-transparent hover:border-black text-black px-0 py-2";

  // Brand Red styles (#C02E31)
  const redStyles = "bg-[#C02E31] text-white border border-[#C02E31] hover:bg-black hover:border-black hover:text-white";
  // Updated hover to black for red-outline
  const redOutlineStyles = "border border-[#C02E31] text-[#C02E31] hover:bg-black hover:border-black hover:text-white bg-transparent";

  let variantStyles = outlineStyles;
  if (variant === 'primary') variantStyles = primaryStyles;
  if (variant === 'text') variantStyles = textStyles;
  if (variant === 'red') variantStyles = redStyles;
  if (variant === 'red-outline') variantStyles = redOutlineStyles;

  // Determine arrow color behavior based on variant
  const getArrowColor = () => {
      if (variant === 'primary') return 'text-white group-hover:text-black';
      if (variant === 'red') return 'text-white group-hover:text-white';
      if (variant === 'red-outline') return 'text-[#C02E31] group-hover:text-white';
      return 'text-black group-hover:text-white';
  };

  return (
    <button 
        onClick={onClick}
        className={`${baseStyles} ${variantStyles} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="font-medium mr-4 z-10">{children}</span>
      {variant !== 'text' && (
        <CornerArrow className={`w-2 h-2 transform rotate-180 group-hover:scale-125 transition-transform z-10 ${getArrowColor()}`} />
      )}
    </button>
  );
};