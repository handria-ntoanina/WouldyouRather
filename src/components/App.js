import React, { Component } from 'react'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './Nav'
import Login from './Login'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#d4e157"
        },
        secondary: {
            main: "#9e9e9e"
        }
    }
})

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
  render(){
    const content = (
            <Container component="main" maxWidth="md">
                <Paper variant="outlined">
                    <Nav />
                    <div>Would you Rather?</div>
                </Paper>
            </Container>)
    return (
        <Router>
            <ThemeProvider theme={theme}>
        		<LoadingBar/>
        		{this.props.loading ? 
        			<div>Loading!</div>
        			:
        			this.props.authedUser ?
                    content : <Login/>
        		}
            </ThemeProvider>
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
