import { SVG } from '@assets/images'
import { FlexSafeArea, WrapSafeArea } from '@components/safearea'
import { useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { Pressable, theme, View } from 'native-base'
import React, { useEffect, useLayoutEffect } from 'react'
import { mainTheme } from '@themes'
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'

type SceneBar = NativeStackNavigationOptions

function BackTitleOptions(
	title: string,
	rightBar?: (props: HeaderButtonProps) => JSX.Element,
	navigation?: any
): SceneBar {
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
		headerRight: rightBar,
		headerTitle: title,
		headerTitleStyle: { color: 'white' },
		headerStyle: {
			backgroundColor: mainTheme.colors.primary[900],
		},
		headerBackground: () => (
			<WrapSafeArea>
				<View backgroundColor="primary.900" />
			</WrapSafeArea>
		),
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

const RouteScreen: React.FC<{
	title?: string
	type?: 'title' | 'custom' | 'back-title' | 'none'
	header?: () => JSX.Element
	headerRight?: (props: HeaderButtonProps) => JSX.Element
}> = ({ title, children, type, header, headerRight }) => {
	const navigation = useNavigation()
	const route = useRoute()

	useLayoutEffect(() => {
		switch (type) {
			case 'title':
				navigation.setOptions({
					...BackTitleOptions(title, headerRight, navigation),
					headerLeft: undefined,
				})
				break
			case 'back-title':
				navigation.setOptions({
					...BackTitleOptions(title, headerRight, navigation),
				})
				break
			case 'custom':
				navigation.setOptions(CustomNavBar(header()))
				break
			default:
				if (title) {
					navigation.setOptions({
						...BackTitleOptions(title, headerRight, navigation),
					})
				} else {
					navigation.setOptions({ headerShow: false })
				}
				break
		}
	}, [navigation, route])

	useEffect(() => {
		switch (type) {
			case 'title':
				navigation.setOptions({
					...BackTitleOptions(title, headerRight, navigation),
					headerLeft: undefined,
				})
				break
			case 'back-title':
				navigation.setOptions({
					...BackTitleOptions(title, headerRight, navigation),
				})
				break
			case 'custom':
				navigation.setOptions(CustomNavBar(header()))
				break
			default:
				if (title) {
					navigation.setOptions({
						...BackTitleOptions(title, headerRight, navigation),
					})
				} else {
					navigation.setOptions({ headerShow: false })
				}
				break
		}
	}, [header, type, headerRight, title])

	return <FlexSafeArea>{children}</FlexSafeArea>
}

export { BackTitleOptions, CustomNavBar, RouteScreen }
