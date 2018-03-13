export const setTheme = theme => dispatch => {
	return dispatch({
		type: 'SET_THEME',
		theme
	})
}

export const setKeywords = keywords => dispatch => {
	return dispatch({
		type: 'SET_KEYWORDS',
		keywords
	})
}

export const addKeyword = (keyword, unread) => dispatch => {
	return dispatch({
		type: 'ADD_KEYWORD',
		keyword,
		unread
	})
}

export const addKeywords = keywords => dispatch => {
	return dispatch({
		type: 'ADD_KEYWORDS',
		keywords
	})
}

export const setGroups = groups => dispatch => {
	return dispatch({
		type: 'SET_GROUPS',
		groups
	})
}

export const addGroup = (title, keywords, unread) => dispatch => {
	return dispatch({
		type: 'ADD_GROUP',
		title,
		keywords,
		unread
	})
}

export const addGroups = groups => dispatch => {
	return dispatch({
		type: 'ADD_GROUPS',
		groups
	})
}
