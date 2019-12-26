import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
	const tron = Reactotron.configure({ host: '192.168.0.100' })
		.useReactNative()
		.use(reactotronRedux())
		.use(sagaPlugin())
		.connect();

	tron.clear();

	console.tron = tron;
}
