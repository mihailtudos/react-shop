import { Outlet, Link } from "react-router-dom";
import {Fragment, useContext} from "react";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.styles";

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
			<NavigationContainer>
				<LogoContainer to='/'>
					<Logo className='logo'/>
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop' >Shop</NavLink>
					{
						currentUser ?
							(<NavLink as='span' onClick={  async () => await signOutUser() }>Sign out</NavLink>) :
							(<NavLink to='/auth' >Sign in</NavLink>)
					}
					<CartIcon/>
				</NavLinks>
				{showCart && <CartDropdown/>}
			</NavigationContainer>
			<Outlet/>
		</Fragment>
	)
}

export default Navigation;
