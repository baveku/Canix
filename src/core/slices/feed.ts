import { GlobalNew, mock_news } from '@models'
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FeedState {
	news: GlobalNew[]
}

const newsAdapter = createEntityAdapter<GlobalNew>({
	// Assume IDs are stored in a field other than `book.id`
	selectId: (gl) => gl.id,
	// Keep the "all IDs" array sorted based on book titles
	sortComparer: (lhs, rhs) => lhs.title.localeCompare(rhs.title),
})

const feedSlice = createSlice({
	name: 'FEED_STATE',
	initialState: newsAdapter.getInitialState(),
	reducers: {
		newsAdded: newsAdapter.addOne
	}
})

export { feedSlice, newsAdapter }