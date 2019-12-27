import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

import Background from '~/components/Background';

export default function Profile() {
	return <Background />;
}

Profile.navigationOptions = {
	tabBarLabel: 'Meu perfil',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="person" size={20} color={tintColor} />
	),
};
