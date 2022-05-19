const { defaults } = require('jest-config')

module.exports = {
	preset: 'react-native',
	transformIgnorePatterns: [
		// ...defaults.transformIgnorePatterns,
		// "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)",
	],
	globals: { __DEV__: true },
	moduleFileExtensions: [
		...defaults.moduleFileExtensions,
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
		'node',
	],
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'jest-transform-stub',
	},
	setupFiles: ['<rootDir>/bin/jest.setup.js'],
	verbose: true,
}
