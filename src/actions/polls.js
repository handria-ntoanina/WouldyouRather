import { showLoading, hideLoading } from 'react-redux-loading'
import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_POLL = 'ADD_POLL'
export const ANSWER_POLL = 'ANSWER_POLL'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'

const receivePolls = (polls) => {
	return {
		type: RECEIVE_POLLS,
		polls
	}
}

const addPoll = (poll) => {
	return {
		type: ADD_POLL,
		poll
	}
}

const answerPoll = (answer)=> {
	return {
		type: ANSWER_POLL,
		answer
	}
}

const removeAnswer = (authedUser, qid) => {
	return {
		type: REMOVE_ANSWER,
		authedUser,
		qid
	}
}

export const handleAddPoll = (optionOneText, optionTwoText) => (dispatch, getState) => {
	const { authedUser } = getState()
	dispatch(showLoading())
	return _saveQuestion({
			author: authedUser,
			optionOneText,
			optionTwoText
		}).then((question) => {
			dispatch(addPoll(question))
			dispatch(hideLoading())
		}).catch(() => {
			alert('An error occured. Try again')
		})
}

export const handleAnswerPoll = (qid, answer) => (dispatch, getState) => {
	const { authedUser } = getState()
	const data = {
			authedUser,
			qid,
			answer
		}
	dispatch(answerPoll(data))
	return _saveQuestionAnswer(data).catch((e) => {
			console.warn('Error in handleAnswerPoll: ', e)
			dispatch(removeAnswer(authedUser, qid))
			alert('There was an error answering the poll. Try again')
		})
}