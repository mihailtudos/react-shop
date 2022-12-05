import { Outlet } from "react-router-dom";
import {Fragment} from "react";
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from "./navigation.styles";

//cart components
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../../assets/crown.svg";
import {signOutUser} from "../../../utils/firebase.utils";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../../store/user/user.selector";
import {selectIsCartOpen} from "../../../store/cart/cart.selector";

const Navigation = () => {
	const isCartOpen = useSelector(selectIsCartOpen);
	const currentUser = useSelector(selectCurrentUser);

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
				{isCartOpen && <CartDropdown/>}
			</NavigationContainer>
			<Outlet/>
		</Fragment>
	)
}

export default Navigation;
