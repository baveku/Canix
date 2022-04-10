import { postsState } from '@atoms'
import { useNavigation } from '@react-navigation/core'
import { Avatar, Box, FlatList, Flex, Text, VStack, HStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Button, LayoutAnimation, View } from 'react-native'
import { useRecoilState, useRecoilCallback, useRecoilValue } from 'recoil'
import PostCell from './components/post'

function ExplorePage() {

	const [posts, setPosts] = useRecoilState(postsState)

	const navigation = useNavigation()

	const onPress = () => {
		navigation.navigate('Tab', {
			screen: 'MessageTab',
		})
	}

	const onAuthPress = () => {
		navigation.navigate('Auth', {
			screen: 'Login',
			params: {
				id: "12"
			}
		})
	}

	const onRemove = (postID: number) => {
		console.log(`DELETE ITEM ${postID}`)
	}

	return (
		<View>
		</View>
	)
}

export default ExplorePage