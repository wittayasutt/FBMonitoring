import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const testInitialState = {
	theme: {
		primary: '#71aeef',
		accent: '#1abaed',
		dark: '#2f2c3d',
		light: '#f2f1f1'
	},
	keywords: ['CIMB', 'TMB', 'SCB', 'KBANK'],
	groups: [
		{
			title: 'หุ้น',
			keywords: ['a', 'b']
		},
		{
			title: 'กองทุน',
			keywords: ['c', 'd']
		}
	]
}

export const actionTypes = {
	ADD_KEYWORD: 'ADD_KEYWORD',
	ADD_GROUP: 'ADD_GROUP'
}

// REDUCERS
export const reducer = (state = testInitialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_KEYWORD:
			return Object.assign({}, state, {
				keywords: state.keywords.push(action.keyword)
			})
		case actionTypes.ADD_GROUP:
			return Object.assign({}, state, {
				groups: state.groups.push({
					title: action.title,
					keywords: action.keywords
				})
			})
		default:
			return state
	}
}

// ACTIONS
export const addKeyword = keyword => dispatch => {
	return dispatch({ type: actionTypes.ADD_KEYWORD, keyword })
}

export const addGroup = (title, keywords) => dispatch => {
	return dispatch({ type: actionTypes.ADD_GROUP, title, keywords })
}

export const initStore = (initialState = testInitialState) => {
	return createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	)
}
