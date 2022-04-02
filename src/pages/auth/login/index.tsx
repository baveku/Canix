import { CompositeScreenProps, StackActions, useNavigation } from '@react-navigation/core'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthParamList, RootStackParamList } from '@router'
import { Box, Button, Heading, Text } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'

type Props = CompositeScreenProps<
	NativeStackScreenProps<AuthParamList, 'Login'>,
	NativeStackScreenProps<RootStackParamList>
>

function LoginScreen() {

	const navigation = useNavigation()

	const onPressDismiss = () => {
		navigation.goBack()
	}

	return (
		<Box flex="1">
			<Button onPress={onPressDismiss}><Heading>Dismiss</Heading></Button>
			<Text fontWeight="medium">

			</Text>
		</Box>
	)
}

export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
