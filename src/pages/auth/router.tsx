import LoginScreen from './login'
import SignInScreen from './signin'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthParamList } from '@router'
import React from 'react'
import ForgotPasswordScreen from './forgotpassword'
const Stack = createNativeStackNavigator<AuthParamList>()
export default function AuthStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="SignUp" component={SignInScreen} />
			<Stack.Screen
				name="ForgotPassword"
				component={ForgotPasswordScreen}
			/>
		</Stack.Navigator>
	)
}
