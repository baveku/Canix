/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react'
import {
	NavigationContainer,
	useNavigationContainerRef,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabScreen from '@pages/tab'
import { AuthStack } from '@pages/auth'
import { useFlipper } from '@react-navigation/devtools'
import { NativeBaseProvider } from 'native-base'
import analytics from '@react-native-firebase/analytics'
import { mainTheme } from '@components/theme'
import { StatusBar } from 'react-native'
import { I18nextProvider, useTranslation } from 'react-i18next'
import i18n from './tools/i18n'
import { useMMKVBoolean, useMMKVString } from 'react-native-mmkv'
import Onboarding from '@pages/other/onboarding'
import { StorageKey, UserWorkflowState } from '@storage'
import { RootStackParamList } from '@router'
import SelectLanguagePage from '@pages/other/selectlanguage'
import { useAppDispatch, useAppSelector } from '@hooks'
import { Provider } from 'react-redux'
import { store } from '@redux.store'
import { navigationSlice } from '@slices'

const MainStack = createNativeStackNavigator<ReactNavigation.RootParamList>()

const App = () => {
	const routeNameRef = React.useRef<string>()
	const navigationRef = useNavigationContainerRef()
	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()
	const userWorkflow = useAppSelector(state => state.navigation.workflow)

	useFlipper(navigationRef)
	const onReady = () => {
		routeNameRef.current = navigationRef.current.getCurrentRoute().name
		if (userWorkflow === UserWorkflowState.LOGIN) {
			navigationRef.navigate('Auth', { screen: 'Login' })
		}
	}

	const onStateChange = async () => {
		const previousRouteName = routeNameRef.current
		const currentRouteName = navigationRef.current.getCurrentRoute().name

		if (previousRouteName !== currentRouteName) {
			await analytics().logScreenView({
				screen_name: currentRouteName,
				screen_class: currentRouteName,
			})
		}
		routeNameRef.current = currentRouteName
		dispatch(navigationSlice.actions.updateCurrentRoute(currentRouteName))
	}

	const getInitialRoute = () => {
		let currentRouteName: keyof (RootStackParamList) = 'Onboarding'
		switch (userWorkflow) {
			case UserWorkflowState.SELECT_LANG:
				currentRouteName = 'SelectLanguage'
				break
			case UserWorkflowState.HOME:
				currentRouteName = 'Tab'
				break
			case UserWorkflowState.LOGIN:
				currentRouteName = 'Tab'
				break
			default:
				currentRouteName = 'Onboarding'
				break
		}
		return currentRouteName
	}

	return (
		<NativeBaseProvider theme={mainTheme}>
			<NavigationContainer
				ref={navigationRef}
				onReady={onReady}
				onStateChange={onStateChange}
			>
				<StatusBar barStyle='dark-content' />
				<MainStack.Navigator
					screenOptions={{ headerShown: false }}
					initialRouteName={getInitialRoute()}>
					<MainStack.Screen name='Onboarding' component={Onboarding} />
					<MainStack.Screen name='SelectLanguage' component={SelectLanguagePage} />
					<MainStack.Screen name="Tab" component={TabScreen} />
					<MainStack.Group screenOptions={{ presentation: 'fullScreenModal' }}>
						<MainStack.Screen name="Auth" component={AuthStack} />
					</MainStack.Group>
				</MainStack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	)
}

function MainApp() {
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<App />
			</I18nextProvider>
		</Provider >
	)
}
export default MainApp
