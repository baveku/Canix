import { Box, Button, Center, Heading, Spacer, Text, useTheme, View, VStack } from 'native-base'
import React from 'react'
import Images from '@assets/images'
import { useMMKV, useMMKVBoolean, useMMKVString } from 'react-native-mmkv'
import { CommonActions, StackActions, useNavigation } from '@react-navigation/native'
import { StorageKey, UserWorkflowState } from '@storage'

export default function OnboardingPage() {
	const theme = useTheme()
	const navigation = useNavigation()
	const [userFlow, setUserFlow] = useMMKVString(StorageKey.USER_WORKFLOW)

	const onPress = () => {
		setUserFlow(UserWorkflowState.SELECT_LANG)
		navigation.reset({ index: 0, routes: [{ name: 'SelectLanguage' }] })
	}

	return (
		<Center style={{ backgroundColor: theme.colors.primary[900] }} flex='1'>
			<Images.Onboarding />
			<VStack height={'6'} />
			<VStack margin='2.5'>
				<VStack margin={'3'} space='2'>
					<Heading color={'white'} size='md' textAlign={'center'}>Boost your productivity</Heading>
					<Heading
						textAlign='center'
						size='xs'
						color='white'>
						Pomodoro techinque allows you to work for a long time without feeling tired
					</Heading>
				</VStack>
				<Button backgroundColor={'white'} height='12' borderRadius={'md'} onPress={onPress}>
					<Heading color={'gray.900'} size='xs'>Get Started</Heading>
				</Button>
			</VStack>
		</Center >
	)
}