import { ECheckbox } from './ECheckbox';

declare const meta: {
    title: string;
    component: typeof ECheckbox;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
export declare const Default: {
    args: {
        label: string;
    };
};
export declare const Checked: {
    args: {
        label: string;
        value: boolean;
    };
};
export declare const Disabled: {
    args: {
        label: string;
        isDisabled: boolean;
    };
};
export declare const DisabledChecked: {
    args: {
        label: string;
        value: boolean;
        isDisabled: boolean;
    };
};
