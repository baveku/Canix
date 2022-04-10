import { atom } from 'recoil'
import { Post, POSTS_MOCK } from '@models'

export const postsState = atom<Post[]>({
	key: 'LIST_POST',
	default: []
})

function deletePost(current: Post[], id: number): Post[] {
	return current.filter(function (val, index, arr) {
		return val.id !== id
	})
}

function addPost(current: Post[], newValue: Post): Post[] {
	return [...current, newValue]
}

export const PostAction = {
	delete: deletePost,
	add: addPost
}