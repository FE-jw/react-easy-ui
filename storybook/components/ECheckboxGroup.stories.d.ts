import { ECheckboxGroup } from './ECheckboxGroup';

declare const meta: {
    title: string;
    component: typeof ECheckboxGroup;
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
export declare const WithDefaultValues: {
    args: {
        name: string;
        options: {
            value: string;
            label: string;
        }[];
        values: string[];
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
        values: string[];
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
