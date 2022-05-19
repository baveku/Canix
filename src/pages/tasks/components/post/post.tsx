import { Post } from '@models'
import { Box, VStack, HStack, Avatar, Image, Skeleton, Button, Heading, Icon, Text, TextArea } from 'native-base'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image'
import { AntDesign, Octicons } from 'src/theme/fonts'

export default function PostShortDetail() {
	return (
		<VStack space={4}>
			<FastImage source={{ uri: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-S/5252/1611840999494/front-left-side-47.jpg?tr=w-375' }} style={styles.image} />
			<VStack space={2}>
				<Heading size={'md'}>The Best Car 2021</Heading>
				<Text numberOfLines={4} fontSize={'sm'}>{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.`}</Text>
				<HStack>
					<Button variant={'ghost'} style={styles.readmoreBtn}>Read More...</Button>
				</HStack>
			</VStack>
		</VStack>
	)
}

const styles = StyleSheet.create({
	container: {},
	image: {
		aspectRatio: 327 / 164,
		marginLeft: 16,
		marginRight: 16,
		borderRadius: 16
	},
	readmoreBtn: {}
})