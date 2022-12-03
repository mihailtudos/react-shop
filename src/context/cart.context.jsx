import {createContext, useEffect, useReducer, useState} from "react";

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

const getCartCount = (cartItems) => (cartItems.reduce((total, cartItem) => {
	return total + cartItem.quantity;
}, 0));

const getNewCartAmount = (cartItems) => cartItems.reduce((total, cartItem) => {
	return total + (cartItem.quantity * cartItem.price);
}, 0);

export const CartContext = createContext({
	cartItems: [],
	isCartOpen: false,
	cartCount: 0,
	totalAmount: 0,
});

export const CART_ACTIONS_REDUCER = {
	'SET_CART_ITEM': 'SET_CART_ITEM',
	'TOGGLE_CART': 'TOGGLE_CART'
}

export const cartReducer = (state, action) => {
	const {type, payload} = action;

	switch (type) {
		case CART_ACTIONS_REDUCER.TOGGLE_CART:
			return {
				...state,
				isCartOpen: !state.isCartOpen
			}
		case CART_ACTIONS_REDUCER.SET_CART_ITEM:

			return {
				...state,
				...payload
			}
		default:
			throw new Error(`Unhandled action ${type}`)
	}
}
const INITIAL_STATE = {
	cartItems: [],
	isCartOpen: false,
	cartCount: 0,
	cartAmount: 0,
}

export const CartProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE);
	const { cartItems, cartCount, cartAmount, isCartOpen } = state;

	const updateCartItems = (newCartItems) => {
		const updatedCart = {
			cartItems: newCartItems,
			cartAmount: getNewCartAmount(newCartItems),
			cartCount: getCartCount(newCartItems)
		};

		dispatch({type: CART_ACTIONS_REDUCER.SET_CART_ITEM, payload: updatedCart});
	}

	const addItemToCart = (productToAdd) => {
		const newCartItems = addCartItem(cartItems, productToAdd);
		updateCartItems(newCartItems);
	}

	const removeItemFromCart = (productToRemove) => {
		const newCartItems = removeCartItem(cartItems, productToRemove);
		updateCartItems(newCartItems);
	};

	const clearItemFromCart = (productToClear) => {
		const newCartItems = clearCartItem(cartItems, productToClear);
		updateCartItems(newCartItems);
	};

	const setShowCart = () => {
		dispatch({type: CART_ACTIONS_REDUCER.TOGGLE_CART})
	};

	const value = {isCartOpen, setShowCart, addItemToCart, cartItems, cartCount, cartAmount, removeItemFromCart, clearItemFromCart};

	return (<CartContext.Provider value={value}>{ children }</CartContext.Provider>)
}
