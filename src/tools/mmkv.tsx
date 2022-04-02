import { useEffect, useState } from 'react'
import { addPlugin, Flipper } from 'react-native-flipper'
import { useMMKV, useMMKVListener, MMKV } from 'react-native-mmkv'

type MMKVAction = 'ADD' | 'DELETE' | 'UPDATE' | 'INITIAL'

export const FlipperMMKVPlugin: React.FC<{ children?: never }> = () => {

	const storage = useMMKV()
	useMMKVListener((key) => {
		pushEvent(key)
	})
	const [flipperConnection, setFlipperConnection] =
		useState<Flipper.FlipperConnection | null>(null)

	const [object, setObject] = useState<{ [key: string]: any }>({})

	useEffect(() => {
		storeInMemory()
	}, [flipperConnection])

	const pushEvent = (key: string) => {
		const value = storage.getString(key)
		let action: MMKVAction = 'UPDATE'
		if (object[key] === undefined) {
			action = 'ADD'
		}

		if (object[key] !== undefined && value === undefined) {
			action = 'DELETE'
		}
		const mapToObject: { [key: string]: any } = storage.getAllKeys().reduce((pre: any, current: any, index: any, arr: any) => {
			return { ...pre, [current]: getValueStorage(storage, current) }
		}, {})
		setObject(mapToObject)
		flipperConnection?.send("newRow", { action, key, value: storage.toJSON(), storage: mapToObject })
	}

	const storeInMemory = () => {
		const mapToObject: { [key: string]: any } = storage.getAllKeys().reduce((pre: any, current: any, index: any, arr: any) => {
			return { ...pre, [current]: getValueStorage(storage, current) }
		}, {})
		setObject(mapToObject)
		flipperConnection?.send("newRow", { action: 'INITIAL', key: '', value: '', storage: mapToObject })
	}

	useEffect(() => {
		addPlugin({
			getId: () => 'rn-mmkv-viewer',
			onConnect: setFlipperConnection,
			onDisconnect: () => { },
			runInBackground: () => true,
		})
	}, [])

	return null
}

function getValueStorage(storage: MMKV, key: string): any | undefined {
	if (storage.contains(key)) {
		if (storage.getString(key) !== undefined) {
			return storage.getString(key)
		}

		if (key.indexOf('is') !== -1 || key.indexOf('IS') !== -1) {
			return storage.getBoolean(key)
		}

		return storage.getNumber(key)
	}

	return undefined
}