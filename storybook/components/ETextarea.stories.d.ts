import { ETextarea } from './ETextarea';

declare const meta: {
    title: string;
    component: typeof ETextarea;
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
export declare const ResizeNone: {
    args: {
        placeholder: string;
        resize: string;
    };
};
export declare const CustomRows: {
    args: {
        placeholder: string;
        rows: number;
    };
};
export declare const ShowCounter: {
    args: {
        placeholder: string;
        showCounter: boolean;
        maxLength: number;
    };
};
