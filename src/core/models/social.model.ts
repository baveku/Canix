export enum SocialType {
	FB,
	TWITTER,
	LINKEDIN,
	INSTAGRAM,
}
export interface Social {
	type: SocialType
	link: string
}
