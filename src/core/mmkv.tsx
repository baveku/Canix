import { MMKV } from 'react-native-mmkv'
import React, { useEffect } from 'react'
import { AppState, View } from 'react-native'
import { RootState, store } from '@redux.store'
const storage = new MMKV()
export const AppStateListener: React.FC<{}> = props => {
	useEffect(() => {
		const unsubcribe = AppState.addEventListener('change', state => {
			const currentState = store.getState()
			const stateStr = JSON.stringify(currentState)
			storage.set('APP_STATE', stateStr)
			console.log('[MMKV Saved]', store.getState())
			console.log('[APPSTATE Changed]', state)
		})
		return () => {
			unsubcribe.remove()
		}
	}, [])

	return <></>
}
