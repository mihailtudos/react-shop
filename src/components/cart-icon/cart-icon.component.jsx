import './cart-icon.styles.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CartIcon = () => {
	const {showCart, setShowCart} = useContext(CartContext);

	const handleCartIconClick = () => setShowCart(!showCart);

	return (
		<div className='cart-icon-container'>
			<ShoppingIcon className='shopping-icon' onClick={handleCartIconClick}/>
			<span className='item-count'>0</span>
		</div>
	)
}

export default CartIcon;
