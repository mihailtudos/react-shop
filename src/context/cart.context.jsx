import {createContext, useEffect, useState} from "react";

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

export const CartContext = createContext({
	cartItems: [],
	addItemToCart: () => {},
	showCart: false,
	setShowCart: () => {},
	cartCount: 0,
	totalAmount: 0,
});

export const CartProvider = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);
	const [cartAmount, setCartAmount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0);

		setCartCount(newCartCount);
	}, [cartItems]);

	useEffect(() => {
		const newTotalAmount = cartItems.reduce((total, cartItem) => {
			return total + (cartItem.quantity * cartItem.price);
		}, 0);
		setCartAmount(newTotalAmount);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	}

	const removeItemFromCart = (cartItem) => {
		setCartItems(removeCartItem(cartItems, cartItem));
	};

	const clearItemFromCart = (cartItem) => {
		setCartItems(cartItems.filter(item => item.id !== cartItem.id));
	};

	const value = {showCart, setShowCart, addItemToCart, cartItems, cartCount, cartAmount, removeItemFromCart, clearItemFromCart};

	return (<CartContext.Provider value={value}>{ children }</CartContext.Provider>)
}
