import { ESelect } from './ESelect';

declare const meta: {
    title: string;
    component: typeof ESelect;
    parameters: {
        layout: string;
        docs: {
            story: {
                height: string;
            };
        };
    };
    tags: string[];
    decorators: ((Story: React.ComponentType) => import("react/jsx-runtime").JSX.Element)[];
};
export default meta;
export declare const Default: {
    args: {
        options: {
            value: string;
            label: string;
        }[];
        placeholder: string;
    };
};
export declare const WithDefaultValue: {
    args: {
        options: {
            value: string;
            label: string;
        }[];
        value: string;
    };
};
export declare const Disabled: {
    args: {
        options: {
            value: string;
            label: string;
        }[];
        placeholder: string;
        isDisabled: boolean;
    };
};
export declare const Searchable: {
    args: {
        options: {
            value: string;
            label: string;
        }[];
        placeholder: string;
        searchable: boolean;
    };
};
export declare const PartiallyDisabled: {
    args: {
        options: ({
            value: string;
            label: string;
            isDisabled?: undefined;
        } | {
            value: string;
            label: string;
            isDisabled: boolean;
        })[];
        placeholder: string;
    };
};
