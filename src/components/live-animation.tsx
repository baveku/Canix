import React, { useContext, useEffect } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import {
	AnimateStyle,
	Extrapolate,
	interpolate,
	runOnUI,
	SharedValue,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
	cancelAnimation,
} from 'react-native-reanimated'
const LiveAnimatedContext =
	React.createContext<
		[
			animationStyle: { opacity: number },
			startAnimation: () => void,
			cancelAnimation: () => void
		]
	>(null)
export const useLiveAnimation = () => {
	return useContext(LiveAnimatedContext)
}
const LiveAnimationProvider: React.FC<{}> = ({ children }) => {
	const alpha = useSharedValue(0)

	const startAnimation = () => {
		alpha.value = withRepeat(withTiming(1, { duration: 1000 }), 0, true)
	}

	const animatedStyles = useAnimatedStyle(() => {
		const newAlpha = interpolate(
			alpha.value,
			[0, 1],
			[0.4, 1],
			Extrapolate.CLAMP
		)
		return {
			opacity: newAlpha,
		}
	})

	return (
		<LiveAnimatedContext.Provider
			value={[
				animatedStyles,
				startAnimation,
				() => {
					cancelAnimation(alpha)
				},
			]}
		>
			{children}
		</LiveAnimatedContext.Provider>
	)
}
export { LiveAnimationProvider }
