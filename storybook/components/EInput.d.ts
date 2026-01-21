export interface EInputProps {
    type?: 'text' | 'password' | 'email' | 'search' | 'url' | 'tel';
    placeholder?: string;
    className?: string;
    isDisabled?: boolean;
    onChange?: (value: string) => void;
    [key: string]: unknown;
}
export declare function EInput({ type, placeholder, className, isDisabled, onChange, ...rest }: EInputProps): import("react/jsx-runtime").JSX.Element;
