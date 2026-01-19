import React from 'react';
import style from './EButton.module.scss';

export interface EButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  isDisabled?: boolean;
  onClick?: () => void;
}

export function EButton({ children, className, variant = 'primary', isDisabled = false, onClick }: EButtonProps) {
  const cn = `${className ? `${className} ` : ''}${isDisabled ? `${style.isDisabled} ` : `${style[variant]} `}${style.button}`;

  // onClick Handler
  const handleOnClick = () => {
    if (!onClick) return;

    onClick();
  };

  return (
    <button type="button" className={cn} onClick={handleOnClick}>
      {children}
    </button>
  );
}
