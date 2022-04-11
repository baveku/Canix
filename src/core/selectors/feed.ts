import { RootState, store } from '@redux.store'
import { newsAdapter } from '@slices'

const feedSelector = newsAdapter.getSelectors<RootState>(state => state.feed)
const allNewFeeds = feedSelector.selectAll(store.getState())
export { allNewFeeds }