import styled from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.inputs};
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.grayHard,
}))`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.grayHard};
`;
