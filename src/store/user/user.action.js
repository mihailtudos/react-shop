import {createAction} from "../../utils/reducer.utils";
import {USER_ACTIONS_REDUCER} from "./user.types";

export const setCurrentUser = (user) => createAction(USER_ACTIONS_REDUCER.SET_CURRENT_USER, user);

