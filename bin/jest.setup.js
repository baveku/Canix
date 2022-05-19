import 'react-native-gesture-handler/jestSetup'

jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock')

	// The mock for `call` immediately calls the callback which is incorrect
	// So we override it with a no-op
	Reanimated.default.call = () => {}

	return Reanimated
})

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter')
jest.mock('@react-native-firebase/analytics', () => {
	return () => ({
		logEvent: jest.fn(),
		setUserProperties: jest.fn(),
		setUserId: jest.fn(),
		setCurrentScreen: jest.fn(),
	})
})

jest.mock('@react-native-firebase/crashlytics', () => {
	return () => ({
		crash: jest.fn(),
	})
})

jest.mock('react-i18next', () => ({
	...jest.requireActual('react-i18next'),
	useTranslation: (domain?: string) => {
		return {
			t: (str: string) => str,
			i18n: {
				changeLanguage: () => new Promise(() => {}),
			},
		}
	},
}))

jest.mock('react-native-mmkv', () => {
	return {
		__esModule: true,
		MMKV: jest.fn().mockImplementation(() => {
			return {
				init: () => {},
				getString: key => key,
			}
		}),
	}
})
