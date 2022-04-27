import React, { useState } from 'react'
import { TabParamList } from '@router'
import { HomeTab } from '@pages/home'
import { ProfileTab } from '@pages/profile'
import { ExploreTab } from '@pages/explore'
import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MessageTab } from '@pages/message'
import { Box, HStack, useTheme, VStack } from 'native-base'
import Images from '@assets/images'
import { useTranslation } from 'react-i18next'
import { Pressable, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MainTabbar from '@pages/tab/tabbar'

const Tab = createBottomTabNavigator<TabParamList>()

function TabScreen() {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Tab.Navigator
			tabBar={props => <MainTabbar {...props} />}
			screenOptions={
				{
					headerShown: false,
					lazy: false,
				}
			}>
			<Tab.Screen
				name="HomeTab"
				component={HomeTab}
				options={
					{
						title: t('common:home'),
						tabBarIcon: props =>
							<Images.TabHome
								stroke={props.color}
							/>
					}
				}
			/>
			<Tab.Screen
				name="ExploreTab"
				component={ExploreTab}
				options={
					{
						title: t('common:explore'),
						tabBarIcon: props =>
							<Images.TabAnalytic
								stroke={props.color}
							/>
					}
				}
			/>
			<Tab.Screen
				name="MessageTab"
				component={MessageTab}
				options={
					{
						title: t('common:message'),
						tabBarIcon: props =>
							<Images.TabHistory
								stroke={props.color}
							/>
					}
				}
			/>
			<Tab.Screen
				name="ProfileTab"
				component={ProfileTab}
				options={
					{
						title: t('common:profile'),
						tabBarIcon: props =>
							<Images.TabProfile
								stroke={props.color}
							/>
					}
				}
			/>
		</Tab.Navigator>
	)
}

export default TabScreen
