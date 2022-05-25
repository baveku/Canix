import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { mainTheme } from '../third-party/theme'

const BTScene: React.FC<{}> = props => {
	return (
		<NativeBaseProvider theme={mainTheme}>
			{props.children}
		</NativeBaseProvider>
	)
}

export default BTScene
