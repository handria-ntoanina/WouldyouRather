export const LOGIN='AUTHEDUSER/LOGIN'
export const LOGOUT='AUTHEDUSER/LOGOUT'

export const login = (id) => {
	return {
		type: LOGIN,
		id
	}
}

export const logout = () => {
	return {
		type: LOGOUT
	}
}