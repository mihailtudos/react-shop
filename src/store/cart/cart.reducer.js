import {CART_ACTIONS_REDUCER} from "./cart.types";


const CART_INITIAL_STATE = {
	cartItems: [],
	isCartOpen: false,
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
	const {type, payload} = action;

	switch (type) {
		case CART_ACTIONS_REDUCER.SET_IS_CART_OPEN:
			return {
				...state,
				isCartOpen: payload
			}
		case CART_ACTIONS_REDUCER.SET_CART_ITEMS:

			return {
				...state,
				cartItems: payload
			}
		default:
			return state;
	}
}

