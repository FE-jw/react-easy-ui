import { EInput } from './EInput';

declare const meta: {
    title: string;
    component: typeof EInput;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
export declare const Default: {
    args: {
        placeholder: string;
    };
};
export declare const Disabled: {
    args: {
        placeholder: string;
        isDisabled: boolean;
    };
};
