import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
	email: Yup.string()
		.email('Insira um e-mail válido')
		.required('O e-mail é obrigatório'),
	password: Yup.string().required('A senha é obrigatória'),
});

export default function SingIn() {
	function handleSubmit(data) {
		console.tron.log(data);
	}

	return (
		<>
			<img src={logo} alt="GoBarber" />

			<Form schema={schema} onSubmit={handleSubmit}>
				<Input name="email" type="email" placeholder="Seu e-mail" />
				<Input
					name="password"
					type="password"
					placeholder="Sua senha secreta"
				/>

				<button type="submit">Acessar</button>
				<Link to="/register">Criar conta gratuita</Link>
			</Form>
		</>
	);
}
