import { MMKV, MMKVConfiguration, useMMKV } from 'react-native-mmkv'

enum StorageKey {
	TOKEN = 'TOKEN',
	USER_INFO = 'USER_INFO',
	USER_WORKFLOW = 'USER_WORKFLOW',
	LANGUAGE = 'LANGUAGE',
}

enum UserWorkflowState {
	ONBOARDING = 'ONBOARDING',
	SELECT_LANG = 'SELECT_LANG',
	LOGIN = 'LOGIN',
	HOME = 'HOME',
}
const storage = new MMKV()
export { StorageKey, UserWorkflowState, storage }
