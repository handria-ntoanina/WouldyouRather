import { loadingBarReducer } from 'react-redux-loading'
import { combineReducers } from 'redux'

export default combineReducers({
	loadingBar: loadingBarReducer
})