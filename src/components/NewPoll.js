import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewPoll extends Component {
	render() {
		return (<div>
			NewPoll
		</div>)
	}
}

const mapStateToProps = ({polls}, ownProps) => {
	return {
		polls,
		...ownProps
	}
}

export default connect(mapStateToProps)(NewPoll)