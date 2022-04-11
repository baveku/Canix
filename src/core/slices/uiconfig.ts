import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UIConfig {}
const initialState: UIConfig = {}

const uiconfigSlice = createSlice({
	name: 'UIConfig',
	initialState,
	reducers: {
		
	}
})

export {uiconfigSlice}
