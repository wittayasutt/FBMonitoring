export const themeReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_THEME':
			return action.theme
		default:
			return state
	}
}

export const keywordsReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_KEYWORDS':
			return [...action.keywords]
		case 'ADD_KEYWORD':
			return [...state, { keyword: action.keyword, unread: action.unread }]
		case 'ADD_KEYWORDS':
			return [...state, ...action.keywords]
		default:
			return state
	}
}

export const groupsReducer = (state = [], action) => {
	switch (action.type) {
		case 'SET_GROUPS':
			return [...action.groups]
		case 'ADD_GROUP':
			return [
				...state,
				{
					title: action.title,
					keywords: action.keywords,
					unread: action.unread
				}
			]
		case 'ADD_GROUPS':
			return [...state, ...action.groups]
		default:
			return state
	}
}
