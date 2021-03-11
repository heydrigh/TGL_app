import * as actionTypes from "./actionTypes";

export const authRequest = (email, password) => {
	return {
		type: actionTypes.AUTH_REQUEST,
		payload: {
			email,
			password,
		},
	};
};

export const authSuccess = (token, user) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		payload: {
			token,
			user,
		},
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		payload: {
			error,
		},
	};
};

export const auth = () => {
	return {
		type: actionTypes.AUTH,
	};
};

export const logout = () => {
	return {
		type: actionTypes.LOGOUT,
	};
};
