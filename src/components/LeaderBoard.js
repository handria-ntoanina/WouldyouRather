import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
	render() {
		return (<div>
			LeaderBoard
		</div>)
	}
}

const mapStateToProps = ({polls}, ownProps) => {
	return {
		polls,
		...ownProps
	}
}

export default connect(mapStateToProps)(LeaderBoard)