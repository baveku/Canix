import { extendTheme } from 'native-base'

export const mainTheme = extendTheme({
	colors: {
		// Add new color
		primary: {
			500: '#6592E9',
			900: '#6592E9',
		},
		yellow: '#FDB92C',
		// Redefinig only one shade, rest of the color will remain same.
		amber: '#d97706',
		gray: {
			200: '#E1E1E1',
			600: '#8A8A8A',
			900: '#4C4C4C',
		}
	},
	config: {
		// Changing initialColorMode to 'dark'
		initialColorMode: 'light',
		useSystemColorMode: false,
	},
})

// 2. Get the type of the CustomTheme
type MainThemeType = typeof mainTheme

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
	interface ICustomTheme extends MainThemeType { }
}