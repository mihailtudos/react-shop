import {CART_ACTIONS_REDUCER} from "./cart.types";
import {createAction} from "../../utils/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
	//check if cartItems contains productToAdd
	const productExists = cartItems.find(item => item.id === productToAdd.id);

	if (productExists) {
		return cartItems.map(item =>
			item.id === productToAdd.id
				? {...item, quantity: item.quantity + 1}
				: item)
	}

	return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, itemToRemove) => {
	const productExists = cartItems.find(item => item.id === itemToRemove.id);

	if (productExists.quantity === 1) {
		return cartItems.filter(item => item.id !== itemToRemove.id);
	}

	if (productExists) {
		return cartItems.map(item =>
			item.id === itemToRemove.id
				? {...item, quantity: item.quantity - 1}
				: item)
	}
};

const clearCartItem = (cartItems, cartItem) => (cartItems.filter(item => item.id !== cartItem.id));


export const setIsCartOpen = (boolean) => {
	return createAction(CART_ACTIONS_REDUCER.SET_IS_CART_OPEN, boolean)
};

export const addItemToCart = (cartItems, productToAdd) => {
	const newCartItems = addCartItem(cartItems, productToAdd);
	return createAction(CART_ACTIONS_REDUCER.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
	const newCartItems = removeCartItem(cartItems, productToRemove);
	return createAction(CART_ACTIONS_REDUCER.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, productToClear) => {
	const newCartItems = clearCartItem(cartItems, productToClear);
	return createAction(CART_ACTIONS_REDUCER.SET_CART_ITEMS, newCartItems);
};



