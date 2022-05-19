/* eslint-disable prettier/prettier */
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import {
	NavigatorScreenParams,
	CompositeScreenProps,
} from '@react-navigation/native'

// ------------------ HOME -----------------------
export type HomeParamList = {
	HomePage: undefined
}

// ------------------ PROFILE -----------------------
export type ProfileParamList = {
	ProfilePage: undefined
}

// ------------------ Search -----------------------
export type TasksParamList = {
	TaskList: undefined
}

// ------------------ Auth -----------------------
export type AuthParamList = {
	Login: { id: string }
	SignUp: undefined
	ForgotPassword: undefined
}

// ------------------ ROOT -----------------------
export type TabParamList = {
	HomeTab: NavigatorScreenParams<HomeParamList>
	ProfileTab: NavigatorScreenParams<ProfileParamList>
	Tasks: NavigatorScreenParams<TasksParamList>
}

export type OnboardingParamList = {}
export type SelectLanguageParamList = {}

export type RootStackParamList = {
	Tab: NavigatorScreenParams<TabParamList>
	Auth: NavigatorScreenParams<AuthParamList>
}

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
