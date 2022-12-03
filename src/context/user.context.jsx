import {createContext, useEffect, useReducer} from "react";
import {createUserDocumentFromAuth, onAuthStateChangeListener} from "../utils/firebase.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
});

export const USER_ACTIONS_REDUCER = {
	'SET_CURRENT_USER': 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case USER_ACTIONS_REDUCER.SET_CURRENT_USER:
			return {
				...state,
				currentUser: payload
			}
		default:
			throw new Error(`Unhandled action ${type}`)
	}
}

const INITIAL_STATE = {
	currentUser: null
};

export const UserProvider = ({ children }) => {
	// const [currentUser, setCurrentUser] = useState(null);
	// const value = {currentUser, setCurrentUser};

	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

	const {currentUser} = state;

	const setCurrentUser = (user) => {
		dispatch({
			type: USER_ACTIONS_REDUCER.SET_CURRENT_USER,
			payload: user
		});
	}
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		const unSubscribe  = onAuthStateChangeListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);

		});
		return unSubscribe;
	}, []);

	return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}
