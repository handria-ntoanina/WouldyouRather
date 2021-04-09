import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  card: {
    marginBottom: theme.spacing(1)
  },
  avatar: {
  	width: theme.spacing(7),
  	height: theme.spacing(7)
  }
})

class PollItem extends Component {
	handleViewPoll = (event) => {
		event.preventDefault()
		const { history, pollId } = this.props
		history.push(`/questions/${pollId}`)
	}
	render() {
		const { pollId, polls, users, classes } = this.props
		const poll = polls[pollId]
		const user = users[poll.author]
		const subheader = (<Fragment>
			<Typography variant='body2'>{'Would you rather ...' + poll.optionOne.text + '...'}</Typography>
			<Button variant='outlined' color='secondary' onClick={this.handleViewPoll}>View Poll</Button>
		</Fragment>)
		return (<Card className={classes.card}>
					<CardHeader title={user.name + ' asks:'}
					subheader={subheader}
						avatar={<Avatar alt={user.name} src={user.avatarURL} className={classes.avatar}/>}
					
					/>
		</Card>)
	}
}

const mapStateToProps = ({polls, users}, ownProps) => {
	return {
		polls,
		users,
		...ownProps
	}
}

export default withRouter(withStyles(styles)(connect(mapStateToProps)(PollItem)))