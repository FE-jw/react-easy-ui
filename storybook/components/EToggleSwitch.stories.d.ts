import { EToggleSwitch } from './EToggleSwitch';

declare const meta: {
    title: string;
    component: typeof EToggleSwitch;
    parameters: {
        layout: string;
    };
    tags: string[];
    render: () => import("react/jsx-runtime").JSX.Element;
};
export default meta;
export declare const False: {
    args: {
        value: boolean;
    };
};
export declare const True: {
    args: {
        value: boolean;
    };
};
export declare const Disabled: {
    args: {
        value: boolean;
        isDisabled: boolean;
    };
};
