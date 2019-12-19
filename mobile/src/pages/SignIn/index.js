import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';
// import { Container } from './styles';

export default function SignIn() {
	return (
		<Background>
			<Text>SignIn</Text>

			<Input
				style={{ marginTop: 30 }}
				icon="call"
				placeholder="Digite seu nome"
			/>
			<Button>Entar</Button>
		</Background>
	);
}
