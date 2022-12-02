import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";


const CartIcon = () => {
	const {cartCount, showCart, setShowCart} = useContext(CartContext);

	const handleCartIconClick = () => setShowCart(!showCart);

	return (
		<CartIconContainer>
			<ShoppingIcon className='shopping-icon' onClick={handleCartIconClick}/>
			<ItemCount className='item-count'>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon;
