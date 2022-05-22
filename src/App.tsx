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
import { mainTheme } from './theme'
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
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LiveAnimationProvider } from '@components/live-animation'

const MainStack = createNativeStackNavigator<ReactNavigation.RootParamList>()

const App = () => {
	const routeNameRef = React.useRef<string>()
	const navigationRef = useNavigationContainerRef()
	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()
	const [isDark, setDark] = useState(false)
	const userWorkflow = useAppSelector(state => state.navigation.workflow)

	useFlipper(navigationRef)
	const onReady = () => {
		routeNameRef.current = navigationRef.current.getCurrentRoute().name
		if (userWorkflow === UserWorkflowState.LOGIN) {
			// navigationRef.navigate('Auth', { screen: 'Login' })
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
		let currentRouteName: keyof RootStackParamList = 'Tab'
		return currentRouteName
	}

	return (
		<NativeBaseProvider theme={mainTheme}>
			<SafeAreaProvider>
				<NavigationContainer
					ref={navigationRef}
					onReady={onReady}
					onStateChange={onStateChange}
				>
					<StatusBar
						barStyle={isDark ? 'dark-content' : 'light-content'}
					/>
					<MainStack.Navigator
						screenOptions={{ headerShown: false }}
						initialRouteName={getInitialRoute()}
					>
						<MainStack.Screen name="Tab" component={TabScreen} />
						<MainStack.Group
							screenOptions={{ presentation: 'fullScreenModal' }}
						>
							<MainStack.Screen
								name="Auth"
								component={AuthStack}
							/>
						</MainStack.Group>
					</MainStack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</NativeBaseProvider>
	)
}

function MainApp() {
	return (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<LiveAnimationProvider>
					<App />
				</LiveAnimationProvider>
			</I18nextProvider>
		</Provider>
	)
}

export default MainApp
