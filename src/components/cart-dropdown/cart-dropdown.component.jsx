import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import {useNavigate} from "react-router-dom";
import {CartDropdownContainer, CartItemContainer, EmptyMessage} from "./cart-dropdown.styles";

const CartDropdown = () => {
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	const {cartItems} = useContext(CartContext);
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
