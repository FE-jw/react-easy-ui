export interface ECheckboxProps {
    name: string;
    value?: boolean;
    label: React.ReactNode;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: boolean) => void;
    [key: string]: unknown;
}
export declare function ECheckbox({ name, value, label, className, isDisabled, onChange, ...rest }: ECheckboxProps): import("react/jsx-runtime").JSX.Element;
