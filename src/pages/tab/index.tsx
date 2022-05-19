import React, { useState } from 'react'
import { TabParamList } from '@router'
import { HomeTab } from '@pages/home'
import { ProfileTab } from '@pages/profile'
import { ExploreTab } from '@pages/tasks'
import {
	BottomTabBarProps,
	createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { Box, HStack, useTheme, VStack } from 'native-base'
import Images from '@assets/images'
import { useTranslation } from 'react-i18next'
import { Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainTabbar from '@pages/tab/tabbar'
import Tasks from '@pages/tasks/router'

const Tab = createBottomTabNavigator<TabParamList>()

function TabScreen() {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Tab.Navigator
			tabBar={props => <MainTabbar {...props} />}
			screenOptions={{
				headerShown: false,
				lazy: false,
			}}
		>
			<Tab.Screen
				name="HomeTab"
				component={HomeTab}
				options={{
					title: t('common:home'),
					tabBarIcon: props => (
						<Images.Home
							fill={props.color}
							stroke={
								props.focused
									? 'transparent'
									: theme.colors.primary[400]
							}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Tasks"
				component={Tasks}
				options={{
					title: t('common:tasks'),
					tabBarIcon: props => (
						<Images.Message
							fill={props.color}
							stroke={
								props.focused
									? 'transparent'
									: theme.colors.primary[400]
							}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="ProfileTab"
				component={ProfileTab}
				options={{
					title: t('common:profile'),
					tabBarIcon: props => (
						<Images.Profile
							fill={props.color}
							stroke={
								props.focused
									? 'transparent'
									: theme.colors.primary[400]
							}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

export default TabScreen
