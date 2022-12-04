import { compose, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";

//setting up needed middlewares to be applied
const middleware = [logger];

//applying all middleware
const composedEnhancers = compose(applyMiddleware(...middleware));

//root-reducer
export const store = createStore(rootReducer, undefined, composedEnhancers);
