import { Match } from '@models'
import FeedCell from '../tasks/components/post'
import {
	CompositeScreenProps,
	useFocusEffect,
	useNavigation,
} from '@react-navigation/core'
import {
	Avatar,
	Box,
	Flex,
	Text,
	VStack,
	HStack,
	SectionList,
	FlatList,
	Center,
	Button,
	useTheme,
} from 'native-base'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { TabParamList, RootStackParamList } from '@router'
import Images from '@assets/images'
import { useLiveAnimation } from '@components/live-animation'

type HomeProps = CompositeScreenProps<
	NativeStackScreenProps<TabParamList, 'HomeTab'>,
	NativeStackScreenProps<RootStackParamList>
>

function HomePage({ navigation, route }: HomeProps) {
	const nav = useNavigation()
	const theme = useTheme()

	return (
		<VStack flex={1} backgroundColor={theme.colors.primary[900]}></VStack>
	)
}

export default HomePage
