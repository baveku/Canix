import { postsState, PostAction } from '@atoms'
import { Post } from '@models'
import FeedCell from '../explore/components/post'
import { useNavigation } from '@react-navigation/core'
import { Avatar, Box, Flex, Text, VStack, HStack, SectionList, FlatList } from 'native-base'
import React, { useEffect, useState } from 'react'
import { Button, LayoutAnimation, ListRenderItem, View } from 'react-native'
import { RecoilState, useRecoilState } from 'recoil'
import { useTranslation } from 'react-i18next'
import PlayerButton from '@pages/home/components/button'
import { SafeAreaView } from 'react-native-safe-area-context'

function HomePage() {
	return (
		<SafeAreaView>
			<PlayerButton></PlayerButton>
		</SafeAreaView>
	)
}

export default HomePage
