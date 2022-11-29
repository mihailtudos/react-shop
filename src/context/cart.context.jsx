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

export const CartContext = createContext({
	cartItems: [],
	addItemToCart: () => {},
	showCart: false,
	setShowCart: () => {},
	cartCount: 0
});

export const CartProvider = ({ children }) => {
	const [showCart, setShowCart] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce((total, cartItem) => {
			return total + cartItem.quantity;
		}, 0);
		setCartCount(newCartCount);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	}

	const value = {showCart, setShowCart, addItemToCart, cartItems, cartCount};

	return (<CartContext.Provider value={value}>{ children }</CartContext.Provider>)
}
