// Type definitions for redux-form 7.0
// Project: https://github.com/erikras/redux-form
// Definitions by: Carson Full <https://github.com/carsonf>, Daniel Lytkin <https://github.com/aikoven>, Karol Janyst <https://github.com/LKay>, Luka Zakrajsek <https://github.com/bancek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
  ComponentClass,
  StatelessComponent,
  ReactElement
} from "react";

export type FieldType = "Field" | "FieldArray";

export interface ErrorOther<T = void> {
    _error?: T;
}

export type FormErrors<FormData = {}, T = void> = {
    [P in keyof FormData]?: ReactElement<any> | string | ErrorOther<T>;
};

export interface WarningOther<T = void> {
    _warning?: T;
}

export type FormWarnings<FormData = {}, T = void> = {
    [P in keyof FormData]?: ReactElement<any> | string | WarningOther<T>;
};

export interface RegisteredFieldState {
    name: string;
    type: FieldType;
}

/**
 * A component class or stateless function component.
 * Workaround for: ComponentClass<P> | SFC<P> which does
 * not resolve due to a bug in TypeScript.
 * https://github.com/Microsoft/TypeScript/pull/8674
 */
export type ComponentConstructor<P = {}> = ComponentClass<P> | StatelessComponent<P>;

export * from "./lib/reduxForm";
//export * from "./lib/Field";
//export * from "./lib/Fields";
//export * from "./lib/FieldArray";
export * from "./lib/Form";
export * from "./lib/FormSection";
export * from "./lib/formValues";
export * from "./lib/formValueSelector";
export * from "./lib/reducer";
export * from "./lib/SubmissionError";
export * from "./lib/actions";
export * from "./lib/actionTypes";
export * from "./lib/selectors";
