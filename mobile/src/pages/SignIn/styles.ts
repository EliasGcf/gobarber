import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.white};
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;
