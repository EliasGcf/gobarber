import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';

import Routes from './routes';
import defaultTheme from './styles/theme/default';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <AppProvider>
          <View style={{ backgroundColor: '#312e38', flex: 1 }}>
            <Routes />
          </View>
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
