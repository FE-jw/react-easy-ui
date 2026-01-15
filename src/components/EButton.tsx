import React from 'react';
import style from './EButton.module.scss';

export interface EButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export function EButton({ children, className, variant = 'primary', onClick }: EButtonProps) {
  const cn = `${className ? `${className} ` : ''}${style.button} ${style[variant]}`;

  return (
    <button type="button" className={cn} onClick={onClick}>
      {children}
    </button>
  );
}
