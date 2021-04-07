export const ADD_VOTE = 'OPTIONS/ADD_VOTE'
export const REMOVE_VOTE = 'OPTIONS/REMOVE_VOTE'

export const addVote = (authedUser) => {
	return {
		type: ADD_VOTE,
		authedUser
	}
}

export const removeVote = (authedUser) => {
	return {
		type: REMOVE_VOTE,
		authedUser
	}
}