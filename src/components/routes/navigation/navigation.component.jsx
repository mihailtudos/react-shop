import { Outlet, Link } from "react-router-dom";
import {Fragment, useContext} from "react";
import './navigation.styles.scss';

//cart components
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../../assets/crown.svg";
import {UserContext} from "../../../context/user.context";
import {signOutUser} from "../../../utils/firebase.utils";
import {CartContext} from "../../../context/cart.context";

const Navigation = () => {
	const {showCart} = useContext(CartContext);
	const { currentUser } = useContext(UserContext);

	return (
		<Fragment>
			<nav className='navigation'>
				<Link to='/' className='logo-container'>
					<Logo className='logo'/>
				</Link>
				<div className='nav-links-container'>
					<Link to='/shop' className='nav-link'>Shop</Link>
					{
						currentUser ?
							(<span className='nav-link' onClick={  async () => await signOutUser() }>Sign out</span>) :
							(<Link to='/auth' className='nav-link'>Sign in</Link>)
					}
					<CartIcon/>
				</div>
				{showCart && <CartDropdown/>}
			</nav>
			<Outlet/>
		</Fragment>
	)
}

export default Navigation;
