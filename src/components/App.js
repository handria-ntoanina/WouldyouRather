import React, { Component, Fragment } from 'react'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import Container from '@material-ui/core/Container'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
  render(){
    const content = (
            <Fragment>
                <Nav />
                <div>Would you Rather?</div>
            </Fragment>)
    return (
        <Router>
        	<Container component="main" maxWidth="sm">
        		<LoadingBar/>
        		{this.props.loading ? 
        			<div>Loading!</div>
        			:
        			this.props.authedUser ?
                    content : <Login/>
        		}
        	</Container>
        </Router>)
  }
}

const mapStateToProps = ({users, authedUser}) => {
	return {
		loading: Object.keys(users).length === 0,
        authedUser
	}
}

export default connect(mapStateToProps)(App)
