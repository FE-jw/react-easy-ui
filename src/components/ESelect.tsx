'use client';

import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import style from './ESelect.module.scss';

export interface ESelectOption {
  value: string | number;
  label: string;
  isDisabled?: boolean;
}

export interface ESelectProps {
  options: ESelectOption[];
  value?: string | number;
  placeholder?: string;
  className?: string;
  isDisabled?: boolean;
  searchable?: boolean;
  searchPlaceholder?: string;
  noOptionsText?: string;
  onChange?: (value: string | number) => void;
}

export function ESelect({
  options,
  value,
  placeholder,
  className,
  isDisabled = false,
  searchable = false,
  searchPlaceholder = 'Search...',
  noOptionsText = 'No results found',
  onChange
}: ESelectProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | number | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const optionListRef = useRef<HTMLUListElement>(null);

  const currentValue = isControlled ? value : internalValue;
  const selectedOption = options.find(o => o.value === currentValue);
  const filteredOptions =
    searchable && searchQuery
      ? options.filter(o => o.label.toLowerCase().includes(searchQuery.toLowerCase()))
      : options;

  const cn = [style.ESelect, isOpen && style.open, isDisabled && style.disabled, className].filter(Boolean).join(' ');

  const handleSelect = (option: ESelectOption) => {
    if (option.isDisabled) return;
    if (!isControlled) setInternalValue(option.value);
    onChange?.(option.value);
    setIsOpen(false);
  };

  const handleToggle = () => {
    if (!isDisabled) setIsOpen(prev => !prev);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setFocusedIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'Tab':
        e.preventDefault();
        if (e.shiftKey) {
          setFocusedIndex(prev => (prev <= 0 ? filteredOptions.length - 1 : prev - 1));
        } else {
          setFocusedIndex(prev => (prev >= filteredOptions.length - 1 ? 0 : prev + 1));
        }
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => (prev >= filteredOptions.length - 1 ? 0 : prev + 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => (prev <= 0 ? filteredOptions.length - 1 : prev - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && filteredOptions[focusedIndex]) {
          handleSelect(filteredOptions[focusedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  // focusedIndex가 변경되면 해당 옵션을 스크롤 뷰에 표시
  useEffect(() => {
    if (focusedIndex < 0 || !optionListRef.current) return;
    const el = optionListRef.current.children[focusedIndex] as HTMLElement;
    el?.scrollIntoView({ block: 'nearest' });
  }, [focusedIndex]);

  // 드롭다운 열릴 때 현재 선택된 옵션으로 focusedIndex 초기화
  useEffect(() => {
    if (isOpen) {
      const idx = options.findIndex(o => o.value === currentValue);
      setFocusedIndex(idx);
      if (searchable) searchRef.current?.focus();
    } else {
      setSearchQuery('');
      setFocusedIndex(-1);
    }
  }, [isOpen, currentValue, options, searchable]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={cn} onKeyDown={handleKeyDown}>
      <div className={style.trigger} tabIndex={isDisabled ? -1 : 0} onClick={handleToggle}>
        <span className={selectedOption ? style.value : style.placeholder}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className={style.arrow} />
      </div>
      {isOpen && (
        <div className={style.dropdown}>
          {searchable && (
            <div className={style.searchWrapper}>
              <input
                ref={searchRef}
                type="text"
                className={style.searchInput}
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          )}
          <ul ref={optionListRef} role="listbox" className={style.optionList}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={currentValue === option.value}
                  aria-disabled={option.isDisabled}
                  className={[
                    style.option,
                    currentValue === option.value && style.selected,
                    option.isDisabled && style.optionDisabled,
                    focusedIndex === index && style.focused
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </li>
              ))
            ) : (
              <li className={style.noOptions}>{noOptionsText}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
