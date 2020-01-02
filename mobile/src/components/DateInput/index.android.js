import React, { useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
	const dateFormatted = useMemo(
		() => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
		[date]
	);

	async function handleOpenPicker() {
		const { action, year, month, day } = await DatePickerAndroid.open({
			mode: 'spinner',
			minDate: new Date(),
			date,
		});

		if (action === DatePickerAndroid.dateSetAction) {
			const selectedDate = new Date(year, month, day);

			onChange(selectedDate);
		}
	}

	return (
		<Container>
			<DateButton onPress={handleOpenPicker}>
				<Icon name="event" color="#fff" size={20} />
				<DateText>{dateFormatted}</DateText>
			</DateButton>
		</Container>
	);
}

DateInput.propTypes = {
	date: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
