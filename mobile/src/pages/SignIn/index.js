import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import {
	Container,
	Form,
	FormInput,
	SubmitButton,
	SignLink,
	SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
	const dispatch = useDispatch();
	const passwordRef = useRef();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const loading = useSelector(state => state.auth.loading);

	function handleSubmit() {
		dispatch(signInRequest(email, password));
	}

	return (
		<Background>
			<Container>
				<Image source={logo} />

				<Form>
					<FormInput
						icon="mail-outline"
						keyboardType="email-address"
						autoCorrect={false}
						autoCapitalize="none"
						placeholder="Digite seu e-mail"
						returnKeyType="next"
						onSubmitEditing={() => passwordRef.current.focus()}
						value={email}
						onChangeText={setEmail}
					/>
					<FormInput
						icon="lock-outline"
						secureTextEntry
						placeholder="Sua senha secreta"
						ref={passwordRef}
						returnKeyType="send"
						onSubmitEditing={handleSubmit}
						value={password}
						onChangeText={setPassword}
					/>

					<SubmitButton loading={loading} onPress={handleSubmit}>
						Acessar
					</SubmitButton>
				</Form>

				<SignLink onPress={() => navigation.navigate('SignUp')}>
					<SignLinkText>Criar conta gratuita</SignLinkText>
				</SignLink>
			</Container>
		</Background>
	);
}

SignIn.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func,
	}).isRequired,
};
