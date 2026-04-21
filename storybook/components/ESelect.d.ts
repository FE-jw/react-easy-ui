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
export declare function ESelect({ options, value, placeholder, className, isDisabled, searchable, searchPlaceholder, noOptionsText, onChange }: ESelectProps): import("react/jsx-runtime").JSX.Element;
