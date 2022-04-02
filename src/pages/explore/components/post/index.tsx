import { Post } from '@models'
import { Box, VStack, HStack, Avatar, Text, Image, Skeleton, Button } from 'native-base'
import React, { useEffect, useState } from 'react'
import Animated, { FadeInUp, FadeOutDown, Layout } from 'react-native-reanimated'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'

import UserInfoPost from './user'
import PostShortDetail from './post'

interface Props {
	post: Post
	imageIndex: number
	onRemove: () => void
}

export default function UserPostCell(props: Props) {
	const [isLoading, setIsLoading] = useState(true)
	const onLoadedImage = () => {
		setIsLoading(false)
	}

	return (
		<Animated.View>
			<VStack space="4" margin={4}>
				<UserInfoPost />
				<PostShortDetail />
			</VStack>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
})