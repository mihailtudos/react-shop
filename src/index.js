import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {Provider} from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import {UserProvider} from "./context/user.context";
import {CategoriesProvider} from "./context/categories.context";
import {CartProvider} from "./context/cart.context";
import {store} from "./store/store";

=======
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";
>>>>>>> origin/redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
	  <Provider store={store}>
		  <BrowserRouter>
				  <CategoriesProvider>
					  <CartProvider>
						  <App />
					  </CartProvider>
				  </CategoriesProvider>
		  </BrowserRouter>
=======
	  <Provider store={store} >
		  <PersistGate loading={null} persistor={persistor}>
			  <BrowserRouter>
				  <App />
			  </BrowserRouter>
		  </PersistGate>
>>>>>>> origin/redux
	  </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
