'use client';

import { ChangeEvent, useState } from 'react';
import style from './ETextarea.module.scss';

type ETextareaBaseProps = {
  name?: string;
  placeholder?: string;
  className?: string;
  rows?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  isDisabled?: boolean;
  onChange?: (value: string) => void;
  [key: string]: unknown;
};

export type ETextareaProps = ETextareaBaseProps &
  ({ showCounter: true; maxLength: number } | { showCounter?: false; maxLength?: number });

export function ETextarea({
  name,
  placeholder,
  className,
  rows = 4,
  resize = 'vertical',
  maxLength,
  showCounter = false,
  isDisabled = false,
  onChange,
  ...rest
}: ETextareaProps) {
  const cn = `${className ? `${className} ` : ''}${style[resize]} ${style.ETextarea}`;
  const [count, setCount] = useState<number>(0);

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.target.value.length);
    if (!onChange) return;

    onChange(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <textarea
        name={name}
        placeholder={placeholder}
        className={cn}
        rows={rows}
        maxLength={maxLength}
        disabled={isDisabled}
        onChange={handleOnChange}
        {...rest}
      />
      {showCounter && (
        <span className={style.counter}>
          {count}/<span className={style.max}>{maxLength}</span>
        </span>
      )}
    </div>
  );
}
