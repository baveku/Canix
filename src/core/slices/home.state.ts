import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export interface HomeState {
	value: number
}

const initialState = { value: 0 } as HomeState

const homeSlice = createSlice({
	name: 'HOME_STATE',
	initialState,
	reducers: {
		increment(state) {
			state.value++
		},
		decrement(state) {
			state.value--
		},
		incrementByAmount(state, action: PayloadAction<number>) {
			state.value += action.payload
		},
	},
})

export { homeSlice }