import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

export default function ProfileScreen() {
	const { t } = useTranslation('common')
	return (
		<View>
			<Text>Hello</Text>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
