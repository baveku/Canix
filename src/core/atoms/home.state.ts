import { atom } from 'recoil'
import { SectionListData } from 'react-native'
import { GlobalNew, mock_news } from 'src/core/models/global.news'

export interface HomeState {

}

export interface FeedState {
	news: GlobalNew[]
}

export const HomeState = atom<HomeState>({
	key: 'HOME_STATE',
	default: {}
})

export const FeedState = atom<FeedState>({
	key: 'FEED_STATE',
	default: {
		news: mock_news
	}
})