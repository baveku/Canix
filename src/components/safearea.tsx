import { NativeBaseProvider, useTheme } from 'native-base'
import React from 'react'
import { SafeAreaView, ViewProps } from 'react-native'

const SafeAreaScreen: React.FC<ViewProps & { flex?: boolean }> = props => {
	const theme = useTheme()
	return (
		<SafeAreaView
			{...props}
			style={[
				props.style,
				props.flex && { flex: 1 },
				{ backgroundColor: theme.colors.primary[900] },
			]}
		>
			{props.children}
		</SafeAreaView>
	)
}

const FlexSafeArea: React.FC<ViewProps> = props => (
	<SafeAreaScreen {...props} flex>
		{props.children}
	</SafeAreaScreen>
)
const WrapSafeArea: React.FC<ViewProps> = props => (
	<SafeAreaScreen>{props.children}</SafeAreaScreen>
)

export { FlexSafeArea, WrapSafeArea }
