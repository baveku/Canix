import { extendTheme } from 'native-base'

export const mainTheme = extendTheme({
	colors: {
		// Add new color
		primary: {
			50: '#e9f0fe',
			100: '#c7d1eb',
			200: '#a2b3da',
			300: '#7d95cc',
			400: '#5a76be',
			500: '#415da4',
			600: '#324881',
			700: '#24335c',
			800: '#141f38',
			900: '#050a17',
		},
		red: {
			50: '#ffe2eb',
			100: '#ffb2c4',
			200: '#fe829d',
			300: '#fb5076',
			400: '#f91f4f',
			500: '#e00636',
			600: '#af012a',
			700: '#7d001d',
			800: '#4e0010',
			900: '#200005',
		},
		amber: {
			50: '#fff4dc',
			100: '#fee2b0',
			200: '#fbce82',
			300: '#f8bb52',
			400: '#f6a723',
			500: '#dc8e09',
			600: '#ab6e04',
			700: '#7b4f01',
			800: '#4a2f00',
			900: '#1c0f00',
		},
		gray: {
			200: '#E1E1E1',
			600: '#8A8A8A',
			900: '#4C4C4C',
		},
		blue: {
			50: '#e5edff',
			100: '#bccaf9',
			200: '#91a7ef',
			300: '#6684e6',
			400: '#3b61dd',
			500: '#2248c4',
			600: '#183899',
			700: '#0f286f',
			800: '#061845',
			900: '#00081d',
		},
		fuchsia: {
			50: '#fee8ff',
			100: '#efbff3',
			200: '#e397e8',
			300: '#d76ede',
			400: '#cc45d4',
			500: '#b32dbb',
			600: '#8b2191',
			700: '#641768',
			800: '#3d0c40',
			900: '#170319',
		},
		rose: {
			50: '#ffe5ef',
			100: '#fbb8cb',
			200: '#f38ba9',
			300: '#ed5f86',
			400: '#e73363',
			500: '#cd1a4a',
			600: '#a01239',
			700: '#740b29',
			800: '#470418',
			900: '#1e0007',
		},
		black: {
			400: '#C4C4C4',
			900: '#111847',
		},
		radian: {
			900: '#FF488A',
		},
	},
	// fontConfig: {
	// 	Poppins: {
	// 		100: {
	// 			normal: 'Poppins-Thin',
	// 			italic: 'Poppins-ThinItalic',
	// 		},
	// 		200: {
	// 			normal: 'Poppins-Light',
	// 			italic: 'Poppins-LightItalic',
	// 		},
	// 		300: {
	// 			normal: 'Poppins-Light',
	// 			italic: 'Poppins-LightItalic',
	// 		},
	// 		400: {
	// 			normal: 'Poppins-Regular',
	// 			italic: 'Poppins-Italic',
	// 		},
	// 		500: {
	// 			normal: 'Poppins-Medium',
	// 			italic: 'Poppins-MediumItalic',
	// 		},
	// 		600: {
	// 			normal: 'Poppins-Medium',
	// 			italic: 'Poppins-MediumItalic',
	// 		},
	// 		// Add more vPopinss
	// 		700: {
	// 			normal: 'Poppins-Bold',
	// 			italic: 'Poppins-BoldItalic',
	// 		},
	// 		800: {
	// 			normal: 'Poppins-Bold',
	// 			italic: 'Poppins-BoldItalic',
	// 		},
	// 		900: {
	// 			normal: 'Poppins-SemiBold',
	// 			italic: 'v-SemiBoldItalic',
	// 		},
	// 	},
	// },
	// fonts: {
	// 	heading: 'Poppins',
	// 	body: 'Poppins',
	// 	mono: 'Poppins',
	// },
	config: {
		// Changing initialColorMode to 'dark'
		initialColorMode: 'dark',
		useSystemColorMode: false,
	},
})

// 2. Get the type of the CustomTheme
type MainThemeType = typeof mainTheme

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
	interface ICustomTheme extends MainThemeType {}
}
