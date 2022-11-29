import './checkout-cart-item.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CheckoutCartItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;
    const {removeItemFromCart, addItemToCart, clearItemFromCart} = useContext(CartContext);
    const removeItemFromCartHandler = () => {
        removeItemFromCart(cartItem);
    }
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={removeItemFromCartHandler } className='arrow'>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={() => addItemToCart(cartItem)} className='arrow'>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem) }>&#10005;</div>
        </div>
    )
}

export default CheckoutCartItem;