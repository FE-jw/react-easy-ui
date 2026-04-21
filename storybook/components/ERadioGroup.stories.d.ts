import { ERadioGroup } from './ERadioGroup';

declare const meta: {
    title: string;
    component: typeof ERadioGroup;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
export declare const Default: {
    args: {
        name: string;
        options: {
            value: string;
            label: string;
        }[];
    };
};
export declare const Vertical: {
    args: {
        name: string;
        options: {
            value: string;
            label: string;
        }[];
        direction: string;
    };
};
export declare const Horizontal: {
    args: {
        name: string;
        options: {
            value: string;
            label: string;
        }[];
        direction: string;
    };
};
export declare const WithDefaultValue: {
    args: {
        name: string;
        options: {
            value: string;
            label: string;
        }[];
        value: string;
    };
};
export declare const Disabled: {
    args: {
        name: string;
        options: {
            value: string;
            label: string;
        }[];
        isDisabled: boolean;
        value: string;
    };
};
export declare const PartiallyDisabled: {
    args: {
        name: string;
        options: ({
            value: string;
            label: string;
            isDisabled?: undefined;
        } | {
            value: string;
            label: string;
            isDisabled: boolean;
        })[];
    };
};
