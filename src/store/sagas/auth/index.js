import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../../actions/auth/actionTypes";

import { authSagas } from "./auth";

export function* watchAuth() {
	yield takeEvery(actionTypes.AUTH_REQUEST, authSagas);
}
