import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItemContainer, EmptyMessage} from "./cart-dropdown.styles";
import {useSelector} from "react-redux";

const CartDropdown = () => {
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	const cartItems = useSelector((state) => state.cart.cartItems);

	return (
		<CartDropdownContainer>
			<CartItemContainer>
				{
					cartItems.length
						? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
						: <EmptyMessage>Your cart is empty</EmptyMessage>
				}
			</CartItemContainer>
			<Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
		</CartDropdownContainer>
	)
}
export default CartDropdown;
