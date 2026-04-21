'use client';

import { useState, useEffect } from 'react';
import style from './ERadioGroup.module.scss';
import { ERadio } from './ERadio';

export type ERadioValue = string | number;

export interface ERadioGroupOption {
  value: ERadioValue;
  label: React.ReactNode;
  isDisabled?: boolean;
}

export interface ERadioGroupProps {
  name: string;
  options: ERadioGroupOption[];
  value?: ERadioValue;
  className?: string;
  isDisabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  gap?: number | string;
  onChange?: (value: ERadioValue) => void;
}

export function ERadioGroup({
  name,
  options,
  value,
  className,
  isDisabled = false,
  direction = 'horizontal',
  gap,
  onChange
}: ERadioGroupProps) {
  const cn = [style.ERadioGroup, style[direction], className].filter(Boolean).join(' ');
  const gapValue = typeof gap === 'number' ? `${gap}px` : gap;
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<ERadioValue | undefined>(value);
  const currentValue = isControlled ? value : internalValue;

  const handleChange = (optionValue: ERadioValue, checked: boolean) => {
    if (!checked) return;

    if (!isControlled) setInternalValue(optionValue);
    onChange?.(optionValue);
  };

  useEffect(() => {
    if (isControlled) setInternalValue(value);
  }, [value, isControlled]);

  return (
    <div
      className={cn}
      role="radiogroup"
      style={gapValue ? ({ '--easy-radio-group-gap': gapValue } as React.CSSProperties) : undefined}
    >
      {options.map(option => (
        <ERadio
          key={option.value}
          name={name}
          label={option.label}
          value={currentValue === option.value}
          isDisabled={isDisabled || option.isDisabled}
          onChange={checked => handleChange(option.value, checked)}
        />
      ))}
    </div>
  );
}
