import { Action, Store } from "redux";
import { Location, LocationDescriptorObject } from "history";
import { AuthBaseConfig, AuthConfig, AuthWrapperDecorator, StateSelector } from "redux-auth-wrapper";
import { InjectedAuthProps } from "redux-auth-wrapper/authWrapper";
import { ConnectedAuthWrapperConfig } from "redux-auth-wrapper/connectedAuthWrapper";

export interface InjectedAuthReduxProps extends InjectedAuthProps {
    redirectPath: string;
}

export interface InjectedAuthRouterProps<Redirect = (...args: any[]) => Action> extends InjectedAuthReduxProps {
    redirect: Redirect;
}

export interface ConnectedRouterRedirectConfig<OwnProps = {}, State = {}> extends AuthBaseConfig<OwnProps, State> {
    redirectPath: string | StateSelector<State, OwnProps, string>;
    allowRedirectBack?: boolean | StateSelector<State, OwnProps, boolean>;
    redirectQueryParamName?: string;
}

declare function connectedRouterRedirect<OwnProps = {}, State = {}>(
    config: ConnectedRouterRedirectConfig<OwnProps, State>
): AuthWrapperDecorator<OwnProps & InjectedAuthRouterProps>;

export type ConnectedReduxRedirectConfig<OwnProps = {}, State = {}> = ConnectedRouterRedirectConfig<OwnProps, State>;

declare function connectedReduxRedirect<OwnProps = {}, State = {}>(
    config: ConnectedReduxRedirectConfig<OwnProps, State>
): AuthWrapperDecorator<OwnProps & InjectedAuthReduxProps>;

export type StateMutateSelector<State, R> = (state: State, nextState: State) => R;

interface CreateOnEnterConfig<State> extends AuthConfig {
    redirectPath: string | StateMutateSelector<State, string>;
    authenticatedSelector: StateMutateSelector<State, boolean>;
    authenticatingSelector?: StateMutateSelector<State, boolean>;
    allowRedirectBack?: boolean | StateMutateSelector<State, boolean>;
    redirectQueryParamName?: string
}

declare function createOnEnter<State = {}>(config: CreateOnEnterConfig<State>):
    (store: Store<any>, nextState: State, redirect: (location: LocationDescriptorObject) => void) => void;

export interface LocationHelperConfig<Props> {
    redirectQueryParamName?: string;
    locationSelector?(props: Props): LocationDescriptorObject;
}

export interface LocationHelper<Props> {
    getRedirectQueryParam(props: Props): string;
    createRedirectLoc(props: Props, redirectPath: string): LocationDescriptorObject;
}

declare function locationHelperBuilder<Props = {}>(config: LocationHelperConfig<Props>): LocationHelper<Props>;
