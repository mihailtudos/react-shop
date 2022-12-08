import './checkout.styles.scss';
import CheckoutCartItem from "../../checkout-cart-item/checkout-cart-item.component";
import {useSelector} from "react-redux";
import {selectCartItems, selectCartTotal} from "../../../store/cart/cart.selector";
import PaymentComponent from "../../payment-form/payment-form.component";

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartAmount = useSelector(selectCartTotal);

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
		   <PaymentComponent/>
       </div>
    )
}
export default Checkout;
