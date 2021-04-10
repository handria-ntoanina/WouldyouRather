import React, { Component } from 'react'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles'
import Nav from './Nav'
import Login from './Login'
import LeaderBoard from './LeaderBoard'
import NewPoll from './NewPoll'
import PollPage from './PollPage'
import NotFound from './NotFound'
import Home from './Home'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'

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

const styles = (theme) => ({
  content: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(1)
  }
})

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
  render(){
    const { classes } = this.props
    const content = (
            <Container component="main" maxWidth="md">
                <Paper variant="outlined">
                    <Nav />
                    <Container maxWidth="sm" className={classes.content}>
                        <Route path="/" exact component={Home}/>
                        <Route path="/add" exact component={NewPoll}/>
                        <Route path="/leaderboard" exact component={LeaderBoard}/>
                        <Route path="/questions/:id" exact component={PollPage}/>
                        <Route path="/notFound" exact component={NotFound}/>
                    </Container>
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

const mapStateToProps = ({users, authedUser}, ownProps) => {
	return {
		loading: Object.keys(users).length === 0,
        authedUser,
        ...ownProps
	}
}

export default withStyles(styles)(connect(mapStateToProps)(App))
