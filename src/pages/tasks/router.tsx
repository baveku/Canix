import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TasksPage from './screen'
import { TasksParamList } from '@router'
import { useTranslation } from 'react-i18next'
const Stack = createNativeStackNavigator<TasksParamList>()

export default function ExplorePage() {
	const { t } = useTranslation()

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="TaskList"
				component={TasksPage}
				options={{ title: t('common:tasks') }}
			/>
		</Stack.Navigator>
	)
}
