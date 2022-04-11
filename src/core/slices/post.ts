import { Post } from '@models'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PostsState {
	all: Post[]
}
const initialState: PostsState = {
	all: []
}

const postsSlice = createSlice({
	name: 'PostsState',
	initialState,
	reducers: {

	}
})
export { postsSlice }
