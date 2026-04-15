'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import style from './ECheckbox.module.scss';

export interface ECheckboxProps {
  name: string;
  value?: boolean;
  text?: React.ReactNode;
  className?: string;
  isDisabled?: boolean;
  [key: string]: unknown;
  onChange?: (value: boolean) => void;
}

export function ECheckbox({ name, value, text, className, isDisabled = false, onChange, ...rest }: ECheckboxProps) {
  const cn = `${className ? `${className} ` : ''}${isDisabled ? `${style.isDisabled} ` : ''}${style.ECheckbox}`;
  const [internalChecked, setInternalChecked] = useState<boolean>(value ?? false);
  const isControlled = value !== undefined;

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;

    const newChecked = e.target.checked;

    if (!isControlled) setInternalChecked(newChecked);
    if (onChange) onChange(newChecked);
  };

  useEffect(() => {
    if (isControlled) setInternalChecked(value);
  }, [value, isControlled]);

  return (
    <label className={cn}>
      <input
        type="checkbox"
        name={name}
        className={style.checkbox}
        checked={isControlled ? value : internalChecked}
        disabled={isDisabled}
        onChange={handleOnChange}
        {...rest}
      />
      <span className={style.icon} aria-hidden="true" />
      {text ? <span className={style.labelText}>{text}</span> : null}
    </label>
  );
}
