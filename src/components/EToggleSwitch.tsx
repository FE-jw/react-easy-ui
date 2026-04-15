'use client';

import { useState, useEffect } from 'react';
import style from './EToggleSwitch.module.scss';

export interface EToggleSwitchProps {
  value?: boolean;
  className?: string;
  isDisabled?: boolean;
  [key: string]: unknown;
  onChange?: (value: boolean) => void;
}

export function EToggleSwitch({ value = false, isDisabled = false, className, onChange, ...rest }: EToggleSwitchProps) {
  const cn = `${className ? `${className} ` : ''}${isDisabled ? `${style.isDisabled} ` : ''}${style.EToggleSwitch}`;
  const [internalChecked, setInternalChecked] = useState<boolean>(value);
  const isControlled = typeof value === 'boolean';

  // onChange Handler
  const handleOnChange = () => {
    if (isDisabled) return;

    const newChecked = isControlled ? !value : !internalChecked;

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
        className={style.checkbox}
        checked={isControlled ? value : internalChecked}
        disabled={isDisabled}
        onChange={handleOnChange}
        {...rest}
      />
      <span className={style.toggleIcon} />
    </label>
  );
}
