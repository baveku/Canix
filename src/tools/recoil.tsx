import { useEffect, useState } from 'react'
import { useRecoilSnapshot } from 'recoil'
import { addPlugin, Flipper } from 'react-native-flipper'

const RecoilFlipperClient: React.FC<{ children?: never }> = () => {
	const snapshot = useRecoilSnapshot()
	const [flipperConnection, setFlipperConnection] =
		useState<Flipper.FlipperConnection | null>(null)

	useEffect(() => {
		addPlugin({
			getId: () => 'react-recoil',
			onConnect: setFlipperConnection,
			onDisconnect: () => { },
			runInBackground: () => true,
		})
	}, [])

	useEffect(() => {
		Array.from(snapshot.getNodes_UNSTABLE({ isModified: true })).forEach(
			(node) => {
				const loadable = snapshot.getLoadable(node)
				flipperConnection?.send('newRow', {
					atom: node.key,
					date: new Date().toISOString(),
					content: loadable.contents,
					state: loadable.state,
				})
			},
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [snapshot])

	return null
}

export default RecoilFlipperClient