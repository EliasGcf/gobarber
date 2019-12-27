import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Appointment from '~/components/Appointment';
import Background from '~/components/Background';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
	return (
		<Background>
			<Container>
				<Title>Agendamentos</Title>

				<List
					data={data}
					keyExtractor={item => String(item)}
					renderItem={({ item }) => <Appointment data={item} />}
				/>
			</Container>
		</Background>
	);
}

Dashboard.navigationOptions = {
	tabBarLabel: 'Agendamentos',
	tabBarIcon: ({ tintColor }) => (
		<Icon name="event" size={20} color={tintColor} />
	),
};
