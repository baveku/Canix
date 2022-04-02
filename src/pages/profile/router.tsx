import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from './screen'
import { ProfileParamList } from '@router'

const ProfileStack = createNativeStackNavigator<ProfileParamList>()

export default function ProfileTab() {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen name="ProfilePage" component={ProfileScreen} />
		</ProfileStack.Navigator>
	)
}
