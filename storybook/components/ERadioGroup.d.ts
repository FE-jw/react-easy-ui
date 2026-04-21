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
export declare function ERadioGroup({ name, options, value, className, isDisabled, direction, gap, onChange }: ERadioGroupProps): import("react/jsx-runtime").JSX.Element;
