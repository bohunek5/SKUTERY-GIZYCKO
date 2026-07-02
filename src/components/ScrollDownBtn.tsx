"use client";

import { FaArrowDown } from 'react-icons/fa';

interface ScrollDownBtnProps {
  className?: string;
  targetSelector?: string;
}

export default function ScrollDownBtn({ className, targetSelector }: ScrollDownBtnProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let nextSibling = null;
    
    if (targetSelector) {
      const section = (e.currentTarget as HTMLElement).closest(targetSelector);
      nextSibling = section?.nextElementSibling;
    }
    
    if (nextSibling) {
      nextSibling.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button 
      className={className} 
      onClick={handleClick}
      aria-label="Przewiń w dół"
    >
      <FaArrowDown />
    </button>
  );
}
