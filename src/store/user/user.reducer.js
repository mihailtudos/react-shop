import {USER_ACTIONS_REDUCER} from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	isLoading: false,
	error: null
};

//as we don't use useReducer to initialize the state we set the initial state as default value

export const userReducer = (state = INITIAL_STATE, action = {}) => {
	const { type, payload } = action;

	switch (type) {
		case USER_ACTIONS_REDUCER.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: payload
			}
		case USER_ACTIONS_REDUCER.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null
			}
		case USER_ACTIONS_REDUCER.SIGN_IN_FAILED:
		case USER_ACTIONS_REDUCER.SIGN_UP_FAILED:
		case USER_ACTIONS_REDUCER.SIGN_OUT_FAILED:
			return {
				...state,
				error: payload
			}
		default:
			return state;//return state by default as dispatch action will be received by all reducers
	}
}
