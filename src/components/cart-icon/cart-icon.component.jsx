import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectIsCartOpen} from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.action";


const CartIcon = () => {
	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);
	const dispatch = useDispatch();

	const handleCartIconClick = () => {
		dispatch(setIsCartOpen(!isCartOpen))
	};

	return (
		<CartIconContainer>
			<ShoppingIcon className='shopping-icon' onClick={handleCartIconClick}/>
			<ItemCount className='item-count'>{cartCount}</ItemCount>
		</CartIconContainer>
	)
}

export default CartIcon;
