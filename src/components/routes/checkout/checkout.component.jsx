import './checkout.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../../context/cart.context";
import CheckoutCartItem from "../../checkout-cart-item/checkout-cart-item.component";

const Checkout = () => {
    const {cartAmount, cartItems} = useContext(CartContext);

    return (
       <div className='checkout-container'>
           <div className='checkout-header'>
               <div className='header-blocks'>
                   <span>Product</span>
               </div>
               <div className='header-blocks'>
                   <span>Description</span>
               </div>
               <div className='header-blocks'>
                   <span>Quantity</span>
               </div>
               <div className='header-blocks'>
                   <span>Price</span>
               </div>
               <div className='header-blocks'>
                   <span>Remove</span>
               </div>
           </div>
           {
               cartItems.map(cartItem => (
                <CheckoutCartItem key={cartItem.id} cartItem={cartItem}/>
           ))
           }
           <span className='total'>Total: ${cartAmount}</span>
       </div>
    )
}
export default Checkout;