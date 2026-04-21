export interface ERadioProps {
    name: string;
    value?: boolean;
    label?: React.ReactNode;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: boolean) => void;
    [key: string]: unknown;
}
export declare function ERadio({ name, value, label, className, isDisabled, onChange, ...rest }: ERadioProps): import("react/jsx-runtime").JSX.Element;
