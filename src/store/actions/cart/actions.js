import * as actionTypes from "./actionTypes";

export const addToCart = (bets) => {
	return {
		type: actionTypes.ADD_TO_CART,
		bets,
	};
};

export const removeFromCart = (id) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		id,
	};
};

export const clearCart = () => {
	return {
		type: actionTypes.CLEAR_CART,
	};
};
