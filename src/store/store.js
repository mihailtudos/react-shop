import {compose, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import {rootReducer} from "./root-reducer";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

//creating the list of middleware (a list of libraries that run before an action hits a reducer)
const middleware = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//applying middleware
const composedEnhancers = composeEnhancer(applyMiddleware(...middleware));

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};



const persistedReducer = persistReducer(persistConfig, rootReducer);

//root-reducer (combines the app reducers)
//the store is intended to facilitate the actions and movement and passing of actions through this reducers
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
