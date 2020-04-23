import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.inputs};
  padding: 16px 0 ${8 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-left: 16px;
`;

export const Icon = styled(FeatherIcon)`
  color: ${({ theme }) => theme.colors.orange};
`;
