import {compose, createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import {rootReducer} from "./root-reducer";

//creating the list of middleware (a list of libraries that run before an action hits a reducer)
const middleware = [logger];

//applying middleware
const composedEnhancers = compose(applyMiddleware(...middleware));

//root-reducer (combines the app reducers)
//the store is intended to facilitate the actions and movement and passing of actions through this reducers
export const store = createStore(rootReducer, undefined, composedEnhancers);
