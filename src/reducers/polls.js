import { RECEIVE_POLLS, ADD_POLL, ANSWER_POLL, REMOVE_ANSWER } from '../actions/polls'
import options from './options'
import { addVote, removeVote } from '../actions/options'

export default function polls(state = {}, action){
	switch(action.type){
		case RECEIVE_POLLS:
			return {
				...action.polls
			}
		case ADD_POLL:
			return {
				...state,
				[action.poll.id]: action.poll
			}
		case ANSWER_POLL: {
			const { authedUser, qid, answer } = action.answer
			const poll = {
				...state[qid],
				[answer]: options(state[qid][answer], addVote(authedUser))
			}
			return {
				...state,
				[poll.id]: poll
			}
		}
		case REMOVE_ANSWER: {
			const { authedUser, qid } = action
			const poll = {
				...state[qid],
				optionOne: options(state[qid].optionOne, removeVote(authedUser)),
				optionTwo: options(state[qid].optionTwo, removeVote(authedUser))
			}
			return {
				...state,
				[poll.id]: poll
			}
		}
		default:
			return state
	}
}