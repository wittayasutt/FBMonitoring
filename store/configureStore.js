import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { themeReducer, keywordsReducer, groupsReducer } from '../reducers'

export const store = (initialState = {}) => {
	const reducer = combineReducers({
		theme: themeReducer,
		keywords: keywordsReducer,
		groups: groupsReducer
	})

	const store = createStore(
		reducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleware))
	)

	return store
}
