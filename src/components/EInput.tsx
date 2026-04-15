'use client';

import { ChangeEvent } from 'react';
import style from './EInput.module.scss';

export interface EInputProps {
  type?: 'text' | 'password' | 'email' | 'search' | 'url' | 'tel';
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
  [key: string]: unknown;
}

export function EInput({ type = 'text', placeholder, className, isDisabled = false, onChange, ...rest }: EInputProps) {
  const cn = `${className ? `${className} ` : ''}${style.EInput}`;

  // onChange Handler
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    onChange(e.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn}
      disabled={isDisabled}
      onChange={handleOnChange}
      {...rest}
    />
  );
}
