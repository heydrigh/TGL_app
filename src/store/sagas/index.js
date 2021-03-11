import { all } from "redux-saga/effects";

import { authSagas } from "./auth/auth";

export default function* rootSaga() {
	return yield all([authSagas]);
}
