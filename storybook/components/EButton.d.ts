export interface EButtonProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary';
    isDisabled?: boolean;
    onClick?: () => void;
    [key: string]: unknown;
}
export declare function EButton({ children, className, variant, isDisabled, onClick, ...rest }: EButtonProps): import("react/jsx-runtime").JSX.Element;
