export const LOGIN='LOGIN'
export const LOGOUT='LOGOUT'

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