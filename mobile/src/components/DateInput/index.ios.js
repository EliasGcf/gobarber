import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
	const [opened, setOpened] = useState(false);

	const dateFormatted = useMemo(
		() => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt }),
		[date]
	);

	return (
		<Container>
			<DateButton onPress={() => setOpened(!opened)}>
				<Icon name="event" color="#fff" size={20} />
				<DateText>{dateFormatted}</DateText>
			</DateButton>

			{opened && (
				<Picker>
					<DatePickerIOS
						date={date}
						onDateChange={onChange}
						minimumDate={new Date()}
						minuteInterval={60}
						locale="pt"
						mode="date"
					/>
				</Picker>
			)}
		</Container>
	);
}

DateInput.propTypes = {
	date: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
