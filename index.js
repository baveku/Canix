/**
 * @format
 */

import { AppRegistry } from 'react-native'

import App from './src/App'
import Config from 'react-native-config'
import { LogBox } from 'react-native'

// index.js
if (__DEV__) {
	require('react-native-performance-flipper-reporter').setupDefaultFlipperReporter()
}

LogBox.ignoreLogs(['Remote debugger', 'NativeBase', 'RCTBridge'])
AppRegistry.registerComponent(Config.APP_NAME, () => App)
