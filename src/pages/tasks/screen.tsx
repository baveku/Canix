import { useNavigation } from '@react-navigation/core'
import { Avatar, Box, FlatList, Flex, Text, VStack, HStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Button, LayoutAnimation, View } from 'react-native'
import PostCell from './components/post'
import { useAppSelector } from '@hooks'

function TasksPage() {
	const posts = useAppSelector(state => state.posts.all)
	const navigation = useNavigation()

	const onPress = () => {
		navigation.navigate('Tab', {
			screen: 'Tasks',
		})
	}

	const onAuthPress = () => {
		navigation.navigate('Auth', {
			screen: 'Login',
			params: {
				id: '12',
			},
		})
	}

	const onRemove = (postID: number) => {
		console.log(`DELETE ITEM ${postID}`)
	}

	return <View></View>
}

export default TasksPage
