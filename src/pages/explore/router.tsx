import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BranchPage from './screen'
import { ExplorerParamList } from '@router'
import { useTranslation } from 'react-i18next'
const Stack = createNativeStackNavigator<ExplorerParamList>()

export default function ExplorePage() {
	const { t } = useTranslation()

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ExplorePage"
				component={BranchPage}
				options={{ title: t('common:explore') }}
			/>
		</Stack.Navigator>
	)
}
