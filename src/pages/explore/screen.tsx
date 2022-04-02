import { postsState } from '@atoms'
import { useNavigation } from '@react-navigation/core'
import { Avatar, Box, FlatList, Flex, Text, VStack, HStack } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Button, LayoutAnimation, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { useRecoilState } from 'recoil'
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
		<Box flex="1">
			<FlatList backgroundColor={'white'} style={{ flex: 1 }}
				contentInset={{ top: 24 }}
				scrollIndicatorInsets={{ top: 0 }}
				data={posts}
				renderScrollComponent={props => <Animated.ScrollView {...props} />}
				renderItem={({ item, index }) => <PostCell post={item} imageIndex={item.id} onRemove={() => onRemove(item.id)} />}
				keyExtractor={(item, ind) => `${item.id}`}
				// Performance settings
				removeClippedSubviews={true} // Unmount components when outside of window
				initialNumToRender={6} // Reduce initial render amount
				maxToRenderPerBatch={2} // Reduce number in each render batch
				updateCellsBatchingPeriod={100} // Increase time between renders
				windowSize={6}
			/>
		</Box>
	)
}

export default ExplorePage