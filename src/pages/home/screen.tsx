import { Post } from '@models'
import FeedCell from '../explore/components/post'
import { useNavigation } from '@react-navigation/core'
import { Avatar, Box, Flex, Text, VStack, HStack, SectionList, FlatList, Center, Button } from 'native-base'
import React, { useEffect, useState } from 'react'
import crashlytics from '@react-native-firebase/crashlytics'

function HomePage() {

	const onPress = () => {
		crashlytics().crash()
	}

	return (
		<Center flex={1}>
			<Button onPress={onPress}><Text>Crash NOW</Text></Button>
		</Center>
	)
}

export default HomePage
