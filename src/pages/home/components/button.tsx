import { useNavigation } from '@react-navigation/native'
import { HStack, Text, View } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function PlayerButton() {
	const navigation = useNavigation()
	return (
		<View>
			<HStack >
				<Text>Hallo</Text>
			</HStack>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
