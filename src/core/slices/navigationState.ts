import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { storage, StorageKey } from '@storage'

export interface NavigationState {
	current: string,
	workflow: string
}
const initialState: NavigationState = {
	current: '',
	workflow: storage.getString(StorageKey.USER_WORKFLOW)
}

const navigationSlice = createSlice({
	name: 'NavigationState',
	initialState,
	reducers: {
		updateUserWorkFlow(state, action: PayloadAction<string>) {
			state.workflow = action.payload
			storage.set(StorageKey.USER_WORKFLOW, action.payload)
		},
		updateCurrentRoute(state, action: PayloadAction<string>) {
			state.current = action.payload
		}
	}
})

export { navigationSlice }
