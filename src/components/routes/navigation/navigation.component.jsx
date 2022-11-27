import { Outlet, Link } from "react-router-dom";
import {Fragment} from "react";
import './navigation.styles.scss';
import { ReactComponent as Logo } from "../../../assets/crown.svg";

const Navigation = () => {
	return (
		<Fragment>
			<nav className='navigation'>
				<Link to='/' className='logo-container'>
					<Logo className='logo'/>
				</Link>
				<div className='nav-links-container'>
					<Link to='/shop' className='nav-link'>Shop</Link>
					<Link to='/auth' className='nav-link'>Sign in</Link>
				</div>
			</nav>
			<Outlet/>
		</Fragment>
	)
}

export default Navigation;
