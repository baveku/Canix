import Images from '@assets/images'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { VStack, HStack, useTheme, Box, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Dimensions, LayoutAnimation, Pressable, StyleSheet, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { withBouncing } from 'react-native-redash'
import { SafeAreaView } from 'react-native-safe-area-context'
const dimentions = Dimensions.get('window')

export default function MainTabbar({ state, descriptors, navigation }: BottomTabBarProps) {
	const theme = useTheme()
	const offset = useSharedValue(state.index)
	const animatedStyles = useAnimatedStyle(() => {
		const numberOfItem = state.routes.length + 1
		const width = dimentions.width
		const childWidth = width / numberOfItem
		return {
			transform: [{ translateX: childWidth * offset.value + childWidth / 2 - 6 }]
		}
	})

	useEffect(() => {
		const newOffset = state.index > Math.floor(state.routes.length / 2 - 1) ? state.index + 1 : state.index
		offset.value = withTiming(newOffset, { duration: 200, easing: Easing.out(Easing.exp) })
	}, [state.index])

	const tabbarButton = ({ route, index }: { route: any, index: number }) => {
		const { options } = descriptors[route.key]
		const label =
			options.tabBarLabel !== undefined
				? options.tabBarLabel
				: options.title !== undefined
					? options.title
					: route.name

		const isFocused = state.index === index

		const onPress = () => {
			const event = navigation.emit({
				type: 'tabPress',
				target: route.key,
				canPreventDefault: true,
			})

			if (!isFocused && !event.defaultPrevented) {
				// The `merge: true` option makes sure that the params inside the tab screen are preserved
				navigation.navigate(route.name)
			}
		}

		const onLongPress = () => {
			navigation.emit({
				type: 'tabLongPress',
				target: route.key,
			})
		}

		return (
			<Pressable
				key={index.toString()}
				accessibilityRole="button"
				accessibilityState={isFocused ? { selected: true } : {}}
				accessibilityLabel={options.tabBarAccessibilityLabel}
				testID={options.tabBarTestID}
				onPress={onPress}
				onLongPress={onLongPress}
				style={{ flex: 1, alignItems: 'center' }}
			>
				{options.tabBarIcon({ focused: isFocused, color: isFocused ? theme.colors.amber[500] : 'transparent', size: 20 })}
				{isFocused ? <Text fontSize={'xs'} color={isFocused ? theme.colors.amber[400] : theme.colors.primary[400]}>{label}</Text> : <></>}

			</Pressable>
		)
	}

	const listTabbarItems = () => {
		let items: JSX.Element[] = []
		state.routes.forEach((route, index) => {
			if (index === 2) {
				items.push(tabbarButton({ route, index }))
			} else {
				items.push(tabbarButton({ route, index }))
			}
		})
		return items
	}

	const onCreate = () => { }

	return (
		<VStack backgroundColor={theme.colors.primary[900]}>
			<HStack alignItems={'center'} paddingTop={'2'}>
				{listTabbarItems()}
			</HStack>
			{/* <HStack>
				<Animated.View style={[styles.divider, { backgroundColor: theme.colors.radian[900] }, animatedStyles]} />
			</HStack> */}
			<SafeAreaView edges={['bottom']} />
		</VStack>
	)
}

const styles = StyleSheet.create({
	divider: {
		width: 12,
		height: 3,
		borderTopLeftRadius: 2,
		borderTopRightRadius: 2
	}
})