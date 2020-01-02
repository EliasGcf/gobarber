import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Dashboard from './pages/Dashboard';
import Confirm from './pages/New/Confirm';
import SelectDateTime from './pages/New/SelectDateTime';
import SelectProvider from './pages/New/SelectProvider';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SingUp';

export default (signedIn = false) =>
	createAppContainer(
		createSwitchNavigator(
			{
				Sign: createSwitchNavigator({
					SignIn,
					SignUp,
				}),
				App: createBottomTabNavigator(
					{
						Dashboard,
						New: {
							screen: createStackNavigator(
								{
									SelectProvider,
									SelectDateTime,
									Confirm,
								},
								{
									defaultNavigationOptions: {
										headerTitleAlign: 'center',
										headerTransparent: true,
										headerTintColor: '#fff',
										headerLeftContainerStyle: {
											marginLeft: 20,
										},
									},
								}
							),
							navigationOptions: {
								tabBarVisible: false,
								tabBarLabel: 'Agendar',
								tabBarIcon: (
									<Icon
										name="add-circle-outline"
										size={20}
										color="rgba(255, 255, 255, 0.6)"
									/>
								),
							},
						},
						Profile,
					},
					{
						resetOnBlur: true,
						tabBarOptions: {
							keyboardHidesTabBar: true,
							activeTintColor: '#FFF',
							inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
							style: {
								backgroundColor: '#8d41a8',
							},
						},
					}
				),
			},
			{
				initialRouteName: signedIn ? 'App' : 'Sign',
			}
		)
	);
