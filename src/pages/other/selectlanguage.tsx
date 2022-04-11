import { Box, Button, Center, Heading, HStack, Spacer, Text, useTheme, View, VStack } from 'native-base'
import React, { useState } from 'react'
import Images from '@assets/images'
import { useTranslation } from 'react-i18next'
import { Pressable, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Image, SvgProps } from 'react-native-svg'
import { useMMKVString } from 'react-native-mmkv'
import { StorageKey, UserWorkflowState } from '@storage'
import { useAppDispatch } from '@hooks'
import { navigationSlice } from '@slices'

enum SupportLanguages {
	en = 'en',
	vi = 'vi',
}

export default function SelectLanguagePage() {
	const theme = useTheme()
	const navigation = useNavigation()
	const { t, i18n } = useTranslation()
	const dispatch = useAppDispatch()
	const [lang, setLang] = useMMKVString(StorageKey.LANGUAGE)

	const getLangTitle = (language: SupportLanguages): { la: string, type: SupportLanguages, flag: React.FC<SvgProps> } => {
		switch (language) {
			case SupportLanguages.en:
				return { la: "English", type: language, flag: Images.EnglishFlag }
			case SupportLanguages.vi:
				return { la: "Tiếng Việt", type: language, flag: Images.VietnameseFlag }
		}
	}

	const onSelectLang = (newLang: SupportLanguages) => {
		i18n.changeLanguage(newLang)
		setLang(newLang)
	}

	const languageItem = (props: { lang: SupportLanguages, isSelected: boolean }) => {
		const lang = getLangTitle(props.lang)
		return (
			<Pressable onPress={() => onSelectLang(lang.type)}>
				<HStack style={[
					styles.lang,
					{
						borderColor: props.isSelected ? theme.colors.primary[900] : theme.colors.gray[200]
					}
				]} alignItems='center' padding='2' space='2'>
					<lang.flag width={20} height={20} />
					<Heading fontSize={'xs'} fontWeight='normal'>{lang.la}</Heading>
				</HStack>
			</Pressable>
		)
	}

	const onPressLogin = () => {
		dispatch(navigationSlice.actions.updateUserWorkFlow(UserWorkflowState.LOGIN))
		navigation.reset({ index: 0, routes: [{ name: 'Tab' }, { name: 'Auth', params: { screen: 'Login' } }] })
	}

	return (
		<VStack style={{ backgroundColor: 'white' }} flex='1' justifyContent='center'>
			<VStack margin='2' space={10}>
				<VStack space='2'>
					<Heading>{t('select_language:title')}</Heading>
					<Heading fontSize='xs' fontWeight={'thin'} color={theme.colors.gray[500]}>{t('select_language:subtitle')}</Heading>
				</VStack>
				<VStack space='2'>
					{languageItem({ isSelected: lang === SupportLanguages.en, lang: SupportLanguages.en })}
					{languageItem({ isSelected: lang === SupportLanguages.vi, lang: SupportLanguages.vi })}
					<Button backgroundColor={theme.colors.primary[900]} height='12' borderRadius={'md'} onPress={onPressLogin}>
						<Heading color={'white'} size='xs'>{t('common:login')}</Heading>
					</Button>
				</VStack>

			</VStack>
		</VStack >
	)
}

const styles = StyleSheet.create({
	lang: {
		borderWidth: 1,
		borderRadius: 8,
	},
})