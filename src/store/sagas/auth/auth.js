import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import * as actions from "../../actions/auth";

export function* authSagas({ payload }) {
	try {
		const response = yield call(api.post, "sessions", payload);

		api.defaults.headers.common[
			"Authorization"
		] = `Bearer ${response.data.token.token}`;

		console.log(response.data);

		yield put(actions.authSuccess(response.data.token, response.data.user));
	} catch (err) {
		yield put(actions.authFail(err));
		alert("Algo errado ao fazer login, tente de novo");
	}
}
