import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserScore from './UserScore'

class LeaderBoard extends Component {
	render() {
		const { users } = this.props
		return (<div>
			{users.map((user) => (
				<UserScore key={user.id} user={user}/>
				))}
		</div>)
	}
}

const mapStateToProps = ({users}, ownProps) => {
	return {
		users: Object.keys(users)
			.sort( (a, b) => 
				Object.keys(users[b].answers).length + users[b].questions.length
				- Object.keys(users[a].answers).length - users[a].questions.length)
			.map((id) => users[id]),
		...ownProps
	}
}

export default connect(mapStateToProps)(LeaderBoard)