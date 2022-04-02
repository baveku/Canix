import { atom } from 'recoil'

export interface UIConfig {
	fontSize: number
}

const uiState = atom<UIConfig>({
	key: 'APP_UI_STATE',
	default: {
		fontSize: 14
	}
})

export { uiState }