import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { logout } from '../actions/authedUser'

const styles = (theme) => ({
  avatar: {
    margin: theme.spacing(0, 2, 0, 2),
  },
  filler: {
  	flexGrow: theme.spacing(1)
  },
  active: {
  	textDecoration: "underline"
  }
})

class Nav extends Component {
	handleLogout = (e) => {
		e.preventDefault()
		this.props.dispatch(logout())
	}
	render(){
		const { classes, authedUser } = this.props
		return (
			<AppBar position="sticky" className={classes.root}>
				<Toolbar>
					<Button color="inherit" component={NavLink} to='/' exact activeClassName={classes.active}>Home</Button>
					<Button color="inherit" component={NavLink} to='/newPoll' exact activeClassName={classes.active}>New Question</Button>
					<Button color="inherit" component={NavLink} to='/leaderBoard' exact activeClassName={classes.active}>Leader Board</Button>
					<span className={classes.filler}/>
					<Typography component="p" variant="avatarLetter">Hello {authedUser.name}</Typography>
					<Avatar alt={authedUser.name} src={authedUser.avatarURL} className={classes.avatar}/>
					<Button color="inherit" onClick={this.handleLogout}>Logout</Button>
				</Toolbar>
			</AppBar>)
	}
}

const mapStateToProps = ({authedUser, users, ownProps}) => {
	return {
		authedUser: users[authedUser],
		...ownProps
	}
}

export default withStyles(styles)(connect(mapStateToProps)(Nav))