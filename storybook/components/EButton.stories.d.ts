import { EButton } from './EButton';

declare const meta: {
    title: string;
    component: typeof EButton;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
export declare const Primary: {
    args: {
        children: string;
        variant: string;
    };
};
export declare const Secondary: {
    args: {
        children: string;
        variant: string;
    };
};
export declare const Disabled: {
    args: {
        children: string;
        isDisabled: boolean;
    };
};
