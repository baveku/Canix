import {
	combineReducers,
	configureStore,
	Middleware,
	Slice,
} from '@reduxjs/toolkit'
import {
	feedSlice,
	homeSlice,
	postsSlice,
	uiconfigSlice,
	navigationSlice,
} from '@slices'
import { MMKV } from 'react-native-mmkv'
const memStorage = new MMKV()
const reducers = combineReducers({
	home: homeSlice.reducer,
	feed: feedSlice.reducer,
	navigation: navigationSlice.reducer,
	posts: postsSlice.reducer,
	uiconfig: uiconfigSlice.reducer,
})
const middlewares: Middleware[] = []

if (__DEV__) {
	const createDebugger = require('redux-flipper-colorized').default
	middlewares.push(createDebugger())
}

const onLoadPreloadState = () => {
	try {
		const appState = JSON.parse(memStorage.getString('APP_STATE'))
		return appState
	} catch {}

	return undefined
}

export const store = configureStore({
	reducer: reducers,
	middleware: middlewares,
	preloadedState: onLoadPreloadState(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
