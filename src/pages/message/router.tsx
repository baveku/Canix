import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MessagePage from './page'
import { MessageParamList } from '@router'

const Stack = createNativeStackNavigator<MessageParamList>()

export default function MessageStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="MessagePage" component={MessagePage} />
		</Stack.Navigator>
	)
}
