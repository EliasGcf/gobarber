import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Dashboard from './pages/Dashboard';
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
						Profile,
					},
					{
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
