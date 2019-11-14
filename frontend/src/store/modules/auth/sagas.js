import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signFailure } from './actions';

export function* singIn({ payload }) {
	try {
		const { email, password } = payload;

		const response = yield call(api.post, 'sessions', {
			email,
			password,
		});

		const { token, user } = response.data;

		if (!user.provider) {
			console.tron.error('Usuário não é prestador');
			return;
		}

		yield put(signInSuccess(token, user));

		history.push('/dashboard');
	} catch (err) {
		yield put(signFailure());
	}
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);
