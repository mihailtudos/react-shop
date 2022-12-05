import './checkout-cart-item.styles.scss';
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.action";
import {selectCartItems} from "../../store/cart/cart.selector";

const CheckoutCartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const removeItemFromCartHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
	const addItemToCartHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const clearItemFromCartHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>r
            <span className='quantity'>
                <div onClick={ removeItemFromCartHandler } className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={ addItemToCartHandler } className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={ clearItemFromCartHandler }>&#10005;</div>
        </div>
    )
}

export default CheckoutCartItem;
