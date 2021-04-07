import { RECEIVE_USERS, ADD_CREATED_POLLS, 
	ADD_ANSWERED_POLLS, REMOVE_ANSWERED_POLLS } from '../actions/users'

export default function users(state = {}, action){
	switch(action.type){
		case RECEIVE_USERS:
			return {
				...action.users
			}
		case ADD_CREATED_POLLS:
			const { userId, pollId } = action
			const user = {
				...state[userId],
				questions: state[userId].questions.concat([pollId])
			}
			return {
				...state,
				[userId]: user
			}
		case ADD_ANSWERED_POLLS: {
			const { userId, pollId, answer } = action
			const user = {
				...state[userId],
				answers: {
					...state[userId].answers,
					[pollId]: answer
				}
			}
			return {
				...state,
				[userId]: user
			}
		}
		case REMOVE_ANSWERED_POLLS: {
			const { userId, pollId } = action
			const { [pollId]: value, ...answers } = state[userId].answers
			const user = {
				...state[userId],
				answers: answers
			}
			return {
				...state,
				[userId]: user
			}
		}
		default:
			return state
	}
}