import { Post } from '@models'
import { Box, VStack, HStack, Avatar, Text, Image, Skeleton, Button, Heading, Icon } from 'native-base'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons } from 'src/theme/fonts'
import FastImage from 'react-native-fast-image'

export default function UserInfoPost() {
	return (
		<HStack alignItems={'center'} space='2'>
			<FastImage
				style={{ width: 40, height: 40, borderRadius: 20 }}
				source={{
					uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
				}}
				resizeMode={'contain'}
			/>
			<VStack flex={1}>
				<Heading size="sm">Julian Steve</Heading>
				<Text fontSize="sm">20 min ago</Text>
			</VStack>
			<Icon as={Ionicons} size={6} name='md-ellipsis-vertical'></Icon>
		</HStack>
	)
}

const styles = StyleSheet.create({
	container: {},
	avatar: {},
	userName: {
		flex: 1
	},
	time: {
		flex: 1
	}
})