type ETextareaBaseProps = {
    name?: string;
    placeholder?: string;
    className?: string;
    rows?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    isDisabled?: boolean;
    onChange?: (value: string) => void;
    [key: string]: unknown;
};
export type ETextareaProps = ETextareaBaseProps & ({
    showCounter: true;
    maxLength: number;
} | {
    showCounter?: false;
    maxLength?: number;
});
export declare function ETextarea({ name, placeholder, className, rows, resize, maxLength, showCounter, isDisabled, onChange, ...rest }: ETextareaProps): import("react/jsx-runtime").JSX.Element;
export {};
