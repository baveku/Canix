module.exports = {
	transformIgnorePatterns: [
		"node_modules/(?!(jest-)?react-native)",
		'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
	],
	globals: { __DEV__: true },
	setupFiles: [
		"<rootDir>/bin/jest.setup.js"
	]
}