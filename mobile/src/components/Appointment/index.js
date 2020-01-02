import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ data, onCancel }) {
	const dateParsed = useMemo(() => {
		return formatRelative(parseISO(data.date), new Date(), {
			locale: pt,
			addSuffix: true,
		});
	}, [data.date]);

	return (
		<Container past={data.past}>
			<Left>
				<Avatar
					source={{
						uri: data.provider.avatar
							? data.provider.avatar.url
							: `https://api.adorable.io/avatar/50/${data.provider.name}.png`,
					}}
				/>

				<Info>
					<Name>{data.provider.name}</Name>
					<Time>{dateParsed}</Time>
				</Info>
			</Left>
			{data.cancelable && !data.canceled_at && (
				<TouchableOpacity onPress={onCancel}>
					<Icon name="event-busy" size={20} color="#f64c85" />
				</TouchableOpacity>
			)}
		</Container>
	);
}

Appointment.propTypes = {
	data: PropTypes.shape({
		provider: PropTypes.shape({
			avatar: PropTypes.shape({
				url: PropTypes.string.isRequired,
			}),
			name: PropTypes.string.isRequired,
		}),
		date: PropTypes.string.isRequired,
		past: PropTypes.bool.isRequired,
		cancelable: PropTypes.bool.isRequired,
		canceled_at: PropTypes.string,
	}).isRequired,
	onCancel: PropTypes.func.isRequired,
};
