'use client';

import { useState, useEffect } from 'react';
import style from './ECheckboxGroup.module.scss';
import { ECheckbox } from './ECheckbox';

export interface ECheckboxGroupOption {
  value: string;
  text?: React.ReactNode;
  isDisabled?: boolean;
}

export interface ECheckboxGroupProps {
  name: string;
  options: ECheckboxGroupOption[];
  values?: string[];
  className?: string;
  isDisabled?: boolean;
  direction?: 'horizontal' | 'vertical';
  gap?: number | string;
  onChange?: (values: string[]) => void;
}

export function ECheckboxGroup({
  name,
  options,
  values,
  className,
  isDisabled = false,
  direction = 'horizontal',
  gap,
  onChange
}: ECheckboxGroupProps) {
  const isControlled = values !== undefined;
  const [internalValues, setInternalValues] = useState<string[]>(values ?? []);
  const currentValues = isControlled ? values : internalValues;
  const handleChange = (optionValue: string, checked: boolean) => {
    const next = checked ? [...currentValues, optionValue] : currentValues.filter(v => v !== optionValue);

    if (!isControlled) setInternalValues(next);
    if (onChange) onChange(next);
  };
  const cn = [style.ECheckboxGroup, style[direction], className].filter(Boolean).join(' ');
  const gapValue = typeof gap === 'number' ? `${gap}px` : gap;

  useEffect(() => {
    if (isControlled) setInternalValues(values);
  }, [values, isControlled]);

  return (
    <div
      className={cn}
      role="group"
      style={gapValue ? ({ '--easy-checkbox-group-gap': gapValue } as React.CSSProperties) : undefined}
    >
      {options.map(option => (
        <ECheckbox
          key={option.value}
          name={name}
          text={option.text}
          value={currentValues.includes(option.value)}
          isDisabled={isDisabled || option.isDisabled}
          onChange={checked => handleChange(option.value, checked)}
        />
      ))}
    </div>
  );
}
