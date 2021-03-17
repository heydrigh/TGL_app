import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "./reducers/auth/auth";
import cartReducer from "./reducers/cart/cart";
import { watchAuth } from "./sagas/auth";

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(watchAuth);

export default store;
