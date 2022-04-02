import { atom } from 'recoil'

export interface NavigationState {
	currentRouteName: string
}

export const navigateState = atom<NavigationState>({
	key: 'NAVIGATION_STATE',
	default: {
		currentRouteName: ''
	}
})