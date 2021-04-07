import { ADD_VOTE, REMOVE_VOTE } from '../actions/options'

export default function options(state = {}, action){
	switch(action.type){
		case ADD_VOTE:
			return {
				...state,
				votes: [...state.votes, action.authedUser]
			}
		case REMOVE_VOTE:
			return {
				...state,
				votes: state.votes.filter((user) => user !== action.authedUser)
			}
		default:
			return state
	}
}