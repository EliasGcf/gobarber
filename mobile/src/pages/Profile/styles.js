import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.SafeAreaView`
	flex: 1;
`;

export const Title = styled.Text`
	font-size: 20px;
	color: #fff;
	font-weight: bold;
	align-self: center;
	margin-top: 30px;
`;

export const Separator = styled.View`
	height: 1px;
	background: rgba(255, 255, 255, 0.2);
	margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
	contentContainerStyle: { padding: 30 },
})`
	align-self: stretch;
`;

export const FormInput = styled(Input)`
	margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
	margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
	margin-top: 10px;
	background: #f64c75;
`;
