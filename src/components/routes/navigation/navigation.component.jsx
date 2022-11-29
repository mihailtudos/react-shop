import { Outlet, Link } from "react-router-dom";
import {Fragment, useContext} from "react";
import './navigation.styles.scss';
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import {UserContext} from "../../../context/user.context";
import {signOutUser} from "../../../utils/firebase.utils";

const Navigation = () => {
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
				</div>
			</nav>
			<Outlet/>
		</Fragment>
	)
}

export default Navigation;
