import { _getUsers, _getQuestions } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { showLoading, hideLoading } from 'react-redux-loading'

export const handleInitialData => () => (dispatch) => {
	dispatch(showLoading())
	_getQuestions().then((questions) => {
		dispatch(receivePolls(questions))
	})
	_getUsers().then((users) => {
			dispatch(receiveUsers(users))
		})
	dispatch(hideLoading())
}