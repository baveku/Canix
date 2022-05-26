module.exports = function (api) {
	api.cache(true)
	const presets = ['module:metro-react-native-babel-preset']
	let plugins = [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: [
					'.ios.js',
					'.android.js',
					'.js',
					'.ts',
					'.tsx',
					'.json',
				],
				alias: {
					tests: ['./tests/'],
					'@models': './src/core/models',
					'@components': './src/components',
					'@pages': './src/pages',
					'@assets': './assets',
					'@router': './src/router',
					'@storage': './src/core/storage',
					'@shared': './src/shared',
					'@hooks': './src/core/hooks.ts',
					'@redux.store': './src/core/store.ts',
					'@selectors': './src/core/selectors',
					'@slices': './src/core/slices',
					'@themes': './src/theme'
				},
			},
		],
		'react-native-reanimated/plugin',
	]

	if (process.env.ENV === 'production') {
		plugins += 'babel-plugin-transform-remove-console'
	}

	return { presets, plugins }
}
