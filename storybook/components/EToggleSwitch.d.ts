export interface EToggleSwitchProps {
    value?: boolean;
    className?: string;
    isDisabled?: boolean;
    [key: string]: unknown;
    onChange?: (value: boolean) => void;
}
export declare function EToggleSwitch({ value, isDisabled, className, onChange, ...rest }: EToggleSwitchProps): import("react/jsx-runtime").JSX.Element;
