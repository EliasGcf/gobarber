import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
	name: Yup.string().required('O nome é obrigatório'),
	email: Yup.string()
		.email('Insira um e-mail válido')
		.required('O e-mail é obrigatório'),
	password: Yup.string()
		.min(6, 'No mínimo 6 caracteres')
		.required('A senha é obrigatória'),
});

export default function SingUp() {
	function handleSubmit(data) {
		console.tron.log(data);
	}

	return (
		<>
			<img src={logo} alt="GoBarber" />

			<Form schema={schema} onSubmit={handleSubmit}>
				<Input name="name" placeholder="Nome completo" />
				<Input name="email" type="email" placeholder="Seu e-mail" />
				<Input
					name="password"
					type="password"
					placeholder="Sua senha secreta"
				/>

				<button type="submit">Criar conta</button>
				<Link to="/">Já tenho login</Link>
			</Form>
		</>
	);
}
