import React, { Component, Fragment } from 'react'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
  render(){
    return (
    	<Fragment>
    		<LoadingBar/>
    		{this.props.loading ? 
    			<div>Loading!</div>
    			:
    			<div>Would you Rather?</div>
    		}
    	</Fragment>)
  }
}

const mapStateToProps = ({users}) => {
	return {
		loading: Object.keys(users).length === 0
	}
}

export default connect(mapStateToProps)(App)
