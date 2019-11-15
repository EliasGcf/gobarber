import React, { useState, useMemo } from 'react';
import { format, subDays, addDays } from 'date-fns';
import pt from 'date-fns/locale/pt';
// import api from '~/services/api';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container, Time } from './styles';

export default function Dashboard() {
	const [date, setDate] = useState(new Date());

	const dateFormatted = useMemo(
		() => format(date, "d 'de' MMMM", { locale: pt }),
		[date]
	);

	function handlePrevDay() {
		setDate(subDays(date, 1));
	}

	function handleNextDay() {
		setDate(addDays(date, 1));
	}

	return (
		<Container>
			<header>
				<button type="button" onClick={handlePrevDay}>
					<MdChevronLeft size={36} color="#fff" />
				</button>
				<strong>{dateFormatted}</strong>
				<button type="button" onClick={handleNextDay}>
					<MdChevronRight size={36} color="#fff" />
				</button>
			</header>

			<ul>
				<Time past>
					<strong>08:00</strong>
					<span>Diego Fernandes</span>
				</Time>
				<Time available>
					<strong>09:00</strong>
					<span>Em aberto</span>
				</Time>
				<Time>
					<strong>10:00</strong>
					<span>Diego Fernandes</span>
				</Time>
				<Time>
					<strong>11:00</strong>
					<span>Diego Fernandes</span>
				</Time>
			</ul>
		</Container>
	);
}
