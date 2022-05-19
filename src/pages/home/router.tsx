import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './screen'
import { HomeParamList } from '@router'
import { useTranslation } from 'react-i18next'
const HomeStack = createNativeStackNavigator<HomeParamList>()

export default function HomeTab() {
	const { t } = useTranslation('common')
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name='HomePage'
				component={HomePage}
				options={
					{
						headerShown: true
					}
				}
			/>
		</HomeStack.Navigator>
	)
}
