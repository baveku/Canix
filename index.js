/**
 * @format
 */

import { AppRegistry } from 'react-native'

import App from './src/App'
import Config from 'react-native-config'
import { LogBox } from 'react-native'
import { MMKV } from 'react-native-mmkv'
// index.js
if (__DEV__) {
	require('react-native-performance-flipper-reporter').setupDefaultFlipperReporter()
	require('react-native-mmkv-flipper-plugin').initializeMMKVFlipper({
		default: new MMKV(),
	})
}

LogBox.ignoreAllLogs()
AppRegistry.registerComponent('main', () => App)
