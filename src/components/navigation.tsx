import { SVG } from '@assets/images'
import { FlexSafeArea, WrapSafeArea } from '@components/safearea'
import {
	useTheme,
	DefaultTheme,
	useNavigation,
	useRoute,
} from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Pressable, View } from 'native-base'
import { propsFlattener } from 'native-base/lib/typescript/hooks/useThemeProps/propsFlattener'
import React, { useLayoutEffect } from 'react'

type SceneBar = NativeStackNavigationOptions

function BackTitleOptions(title: string, navigation: any): SceneBar {
	return {
		headerLeft: props => (
			<Pressable
				onPress={() => {
					navigation.goBack()
				}}
			>
				<SVG.Back style={{ height: 40, width: 40 }} />
			</Pressable>
		),
		headerTitle: title,
		headerTitleStyle: { color: 'white' },
		headerBackground: () => <View backgroundColor="primary.900" flex={1} />,
		headerShown: true,
	}
}

function CustomNavBar(component: JSX.Element): SceneBar {
	return {
		header: props => component,
		headerBackground: () => (
			<WrapSafeArea>
				<View backgroundColor="primary.900" />
			</WrapSafeArea>
		),
		headerShown: true,
	}
}

const NavigationScreen: React.FC<{
	title?: string
	headerType?: 'title' | 'custom' | 'back-title' | 'none'
	header?: () => JSX.Element
}> = ({ title, children, headerType, header }) => {
	const navigation = useNavigation()
	const route = useRoute()

	useLayoutEffect(() => {
		switch (headerType) {
			case 'title':
				navigation.setOptions({
					...BackTitleOptions(title, navigation),
					headerLeft: undefined,
				})
				break
			case 'back-title':
				navigation.setOptions({
					...BackTitleOptions(title, navigation),
				})
				break
			case 'custom':
				navigation.setOptions(CustomNavBar(header()))
				break
			default:
				navigation.setOptions({ headerShow: false })
				break
		}
	}, [navigation, route])

	return <FlexSafeArea>{children}</FlexSafeArea>
}

export { BackTitleOptions, CustomNavBar, NavigationScreen }
