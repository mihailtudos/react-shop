import {createAction} from "../../utils/reducer.utils";
import {USER_ACTIONS_REDUCER} from "./user.types";

export const setCurrentUser = (user) => createAction(USER_ACTIONS_REDUCER.SET_CURRENT_USER, user);

export const checkUSerSession = () => createAction(USER_ACTIONS_REDUCER.CHECK_USE_SESSION);
export const googleSignInStart = () => createAction(USER_ACTIONS_REDUCER.GOOGLE_SIGN_IN_START);
export const emailSignInStart = (email, password) => createAction(USER_ACTIONS_REDUCER.EMAIL_SIGN_IN_START, {email, password});
export const signInSuccess = (user) => createAction(USER_ACTIONS_REDUCER.SIGN_IN_SUCCESS, user);
export const signInFailed = (error) => createAction(USER_ACTIONS_REDUCER.SIGN_IN_FAILED, error);
export const signUpStart = (email, password, displayName) => createAction(USER_ACTIONS_REDUCER.SIGN_UP_START, {email, password, displayName});
export const signUpSuccess = (user, additionalDetails) => createAction(USER_ACTIONS_REDUCER.SIGN_IN_SUCCESS, { user, additionalDetails });
export const signUpFailed = (error) => createAction(USER_ACTIONS_REDUCER.SIGN_UP_FAILED, error)
export const signOutStart = () => createAction(USER_ACTIONS_REDUCER.SIGN_OUT_START);
export const signOutSuccess = () => createAction(USER_ACTIONS_REDUCER.SIGN_OUT_SUCCESS);
export const signOutFailed = (error) => createAction(USER_ACTIONS_REDUCER.SIGN_OUT_FAILED, error);
