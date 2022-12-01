import {takeLatest, all, call} from "redux-saga/effects";

import {USER_ACTION_TYPES} from "./user.type";

import {signInSuccess, signInFailed} from "./user.action";

import {getCurrentUser} from "../../utils/firebase/firebase.utils";

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;

  } catch (error) {}
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION);
}

export function* userSaga() {
  yield all([]);
}
