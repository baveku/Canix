import React from 'react'
import { TabParamList } from '@router'
import { HomeTab } from '@pages/home'
import { ProfileTab } from '@pages/profile'
import { ExploreTab } from '@pages/explore'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MessageTab } from '@pages/message'
import { useTheme } from 'native-base'
import Images from '@assets/images'
import { useTranslation } from 'react-i18next'

const Tab = createBottomTabNavigator<TabParamList>()

function TabScreen() {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Tab.Navigator
			screenOptions={
				{
					headerShown: false,
					tabBarActiveTintColor: theme.colors.primary[900],
					tabBarInactiveTintColor: theme.colors.gray[400],
					lazy: false
				}
			}>
			<Tab.Screen
				name="HomeTab"
				component={HomeTab}
				options={
					{
						title: t('common:home'),
						tabBarIcon: props =>
							<Images.Home
								fill={props.focused ? theme.colors.primary[900] : 'none'}
								stroke={theme.colors.gray[400]}
								strokeWidth={props.focused ? "0" : "2"}
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
							<Images.Explore
								fill={props.focused ? theme.colors.primary[900] : 'none'}
								stroke={theme.colors.gray[400]}
								strokeWidth={props.focused ? "0" : "2"}
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
							<Images.Message
								fill={props.focused ? theme.colors.primary[900] : 'none'}
								stroke={theme.colors.gray[400]}
								strokeWidth={props.focused ? "0" : "1.5"}
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
							<Images.Profile
								fill={props.focused ? theme.colors.primary[900] : 'none'}
								stroke={theme.colors.gray[400]}
								strokeWidth={props.focused ? "0" : "2"}
							/>
					}
				}
			/>
		</Tab.Navigator>
	)
}
export default TabScreen
