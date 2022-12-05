import {USER_ACTIONS_REDUCER} from "./user.types";

const INITIAL_STATE = {
	currentUser: null
};

//as we don't use useReducer to initialize the state we set the initial state as default value

export const userReducer = (state = INITIAL_STATE, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTIONS_REDUCER.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload
			}
		default:
			return state;//return state by default as dispatch action will be received by all reducers
	}
}
