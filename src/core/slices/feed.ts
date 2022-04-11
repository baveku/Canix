import { GlobalNew, mock_news } from 'src/core/models/global.news'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FeedState {
	news: GlobalNew[]
}
const initialState: FeedState = {
	news: mock_news,
}

const feedSlice = createSlice({
	name: 'FEED_STATE',
	initialState,
	reducers: {
		updateNews(state) {
			state.news = []
		}
	}
})

export { feedSlice }