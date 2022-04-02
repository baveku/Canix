import i18n from 'i18next'
import resources from '@assets/translation'
import { initReactI18next } from 'react-i18next'
import { MMKV, useMMKV, useMMKVString } from 'react-native-mmkv'
import { StorageKey } from '@storage'

const storage = new MMKV()
i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		compatibilityJSON: 'v3',
		resources: resources,
		lng: storage.getString(StorageKey.LANGUAGE) ?? 'en',
		interpolation: {
			escapeValue: false // react already safes from xss
		}
	})
export default i18n