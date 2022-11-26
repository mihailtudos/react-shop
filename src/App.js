import Home from "./components/routes/home/home.component";
import {Routes, Route, Outlet} from "react-router-dom";

const Navigation = () => {
  return (
	  <div>
		  <nav>Navbar</nav>
		  <Outlet/>
	  </div>
  )
}

const Shop = () => {
	return (
		<div>
			<h1>Shop</h1>
		</div>
	)
}

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home/>} />
				<Route path='shop' element={<Shop/>} />
			</Route>
		</Routes>
	)
}

export default App;
