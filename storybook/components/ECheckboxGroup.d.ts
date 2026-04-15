export type ECheckboxValue = string | number;
export interface ECheckboxGroupOption {
    value: ECheckboxValue;
    label: React.ReactNode;
    isDisabled?: boolean;
}
export interface ECheckboxGroupProps {
    name: string;
    options: ECheckboxGroupOption[];
    values?: ECheckboxValue[];
    className?: string;
    isDisabled?: boolean;
    direction?: 'horizontal' | 'vertical';
    gap?: number | string;
    onChange?: (values: ECheckboxValue[]) => void;
}
export declare function ECheckboxGroup({ name, options, values, className, isDisabled, direction, gap, onChange }: ECheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
