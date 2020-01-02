import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ navigation }) {
	const provider = navigation.getParam('provider');
	const time = navigation.getParam('time');

	const dateFormatted = useMemo(
		() => formatRelative(parseISO(time), new Date(), { locale: pt }),
		[time]
	);

	async function handleAddAppointment() {
		await api.post('appointments', {
			provider_id: provider.id,
			date: time,
		});

		navigation.navigate('Dashboard');
	}

	return (
		<Background>
			<Container>
				<Avatar
					source={{
						uri: provider.avatar
							? provider.avatar.url
							: `https://api.adorable.io/avatar/50/${provider.name}.png`,
					}}
				/>

				<Name>{provider.name}</Name>

				<Time>{dateFormatted}</Time>

				<SubmitButton onPress={handleAddAppointment}>
					Confirmar agendamento
				</SubmitButton>
			</Container>
		</Background>
	);
}

Confirm.navigationOptions = ({ navigation }) => ({
	title: 'Confirmar agendamento',
	headerLeft: () => (
		<TouchableOpacity
			onPress={() => {
				navigation.goBack();
			}}
		>
			<Icon name="chevron-left" size={20} color="#fff" />
		</TouchableOpacity>
	),
});

Confirm.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired,
		getParam: PropTypes.func.isRequired,
	}).isRequired,
};
