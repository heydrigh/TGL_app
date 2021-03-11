import * as actionType from "../../actions/auth/actionTypes";
import { updateObject } from "../../utility";

const INITIAL_STATE = {
	isAuth: false,
	error: null,
	loading: false,
	token: null,
	user: {},
};

const authRequest = (state, action) => {
	return updateObject(state, { loading: true, error: null });
};

const authSuccess = (state, action) => {
	return updateObject(state, {
		isAuth: true,
		loading: false,
		user: action.payload.user,
		token: action.payload.token,
		error: null,
	});
};

export const authFail = (state, action) => {
	return updateObject(state, {
		loading: false,
		error: action.payload.error,
		auth: false,
	});
};

export const logout = (state, action) => {
	return updateObject(state, {
		isAuth: false,
		error: null,
		loading: false,
		token: null,
		user: {},
	});
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionType.AUTH_REQUEST:
			return authRequest(state, action);
		case actionType.AUTH_SUCCESS:
			return authSuccess(state, action);
		case actionType.AUTH_FAIL:
			return authFail(state, action);
		case actionType.LOGOUT:
			return logout(state, action);
		default:
			return state;
	}
};

export default reducer;
