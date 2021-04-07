export const RECEIVE_USERS = 'USERS/RECEIVE'
export const ADD_CREATED_POLLS = 'USERS/ADD_CREATED_POLLS'
export const ADD_ANSWERED_POLLS = 'USERS/ADD_ANSWERED_POLLS'
export const REMOVE_ANSWERED_POLLS = 'USERS/REMOVE_ANSWERED_POLLS'

export const receiveUsers = (users) => {
	return {
		type: RECEIVE_USERS,
		users
	}
}

export const addCreatedPolls = (userId, pollId) => {
	return {
		type: ADD_CREATED_POLLS,
		userId,
		pollId
	}
}

export const addAnsweredPolls = (userId, pollId, answer) => {
	return {
		type: ADD_ANSWERED_POLLS,
		userId,
		pollId
	}	
}

export const removeAnsweredPolls = (userId, pollId) => {
	return {
		type: REMOVE_ANSWERED_POLLS,
		userId,
		pollId
	}	
}
