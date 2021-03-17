import * as actionTypes from "../../actions/cart/actionTypes";
import { updateObject } from "../../utility";

const INITIAL_STATE = {
	bets: [],
};

const addItem = (state, action) => {
	state.bets.push(action.bets);

	return { ...state };
};

const removeItem = (state, action) => {
	return {
		...state,
		bets: state.bets.filter((bet) => bet.game_id !== action.id),
	};
};

const clear = (state, action) => {
	return updateObject(state, {
		bets: [],
	});
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			return addItem(state, action);
		case actionTypes.REMOVE_FROM_CART:
			return removeItem(state, action);
		case actionTypes.CLEAR_CART:
			return clear(state, action);
		default:
			return state;
	}
};

export default reducer;
