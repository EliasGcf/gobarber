import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import App from './App';
import { store, persistor } from './store';

export default function Index() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<StatusBar barStyle="light-content" backgroundColor="#7159c1" />
				<App />
			</PersistGate>
		</Provider>
	);
}
