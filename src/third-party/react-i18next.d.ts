import resources from '@assets/translation'
declare module "react-i18next" {
	interface CustomTypeOptions {
		// custom namespace type if you changed it
		defaultNS: typeof resources["en"]
		// custom resources type
		resources: typeof resources["en"]
	}
}