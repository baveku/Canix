export interface GlobalNew {
	id: string
	title: string | null
	content: string
	image: string | null
	created_at: number
	isPinned: boolean | null
	type: ENew
}

enum ENew {
	ECONOMY,
	CRYPTO,
	GLOBAL
}

export const getNewsColor = (e: ENew) => {
	switch (e) {
		case ENew.ECONOMY:
			return "#"
		case ENew.CRYPTO:
			return "#"
		case ENew.GLOBAL:
			return "#"
	}
}

export const mock_news: GlobalNew[] = [
	{
		id: "1",
		title: null,
		content: "DXY tăng 15 điểm trong ngắn hạn và hiện ở mức 97,74.",
		image: "",
		created_at: Date.now(),
		isPinned: false,
		type: ENew.ECONOMY
	},
	{
		id: "2",
		title: "1",
		content: "DXY tăng 15 điểm trong ngắn hạn và hiện ở mức 97,74.",
		image: "",
		created_at: Date.now(),
		isPinned: false,
		type: ENew.ECONOMY
	},
	{
		id: "3",
		title: "1",
		content: "DXY tăng 15 điểm trong ngắn hạn và hiện ở mức 97,74.",
		image: "",
		created_at: Date.now(),
		isPinned: false,
		type: ENew.ECONOMY
	},
	{
		id: "4",
		title: "1",
		content: "DXY tăng 15 điểm trong ngắn hạn và hiện ở mức 97,74.",
		image: "",
		created_at: Date.now(),
		isPinned: false,
		type: ENew.ECONOMY
	}
]