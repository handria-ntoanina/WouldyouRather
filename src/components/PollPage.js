import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { handleAnswerPoll } from '../actions/polls'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import OptionResult from './OptionResult'

const styles = (theme) => ({
  card: {
    marginBottom: theme.spacing(1)
  },
  cardActions: {
  	position: "relative"
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  button: {
  	position: "absolute",
  	right: theme.spacing(1),
  	bottom: theme.spacing(1)
  }
})

class PollResult extends Component {
	render(){
		const { poll, author, classes } = this.props
		const total = poll.optionOne.votes.length + poll.optionTwo.votes.length
		return (<Card className={classes.card}>
					<CardHeader title={'Asked by ' + author.name}
						subheader="Results:"
						avatar={<Avatar alt={author.name} src={author.avatarURL} className={classes.avatar}/>}
					/>
					<CardContent>
						<OptionResult option={poll.optionOne} 
									choice={poll.optionOne.votes.includes(author.id)}
									total={total}
									count={poll.optionOne.votes.length}/>
						<OptionResult option={poll.optionTwo} 
									choice={poll.optionTwo.votes.includes(author.id)}
									total={total}
									count={poll.optionTwo.votes.length}/>
					</CardContent>
		</Card>)
	}
}

class PollVote extends Component {
	state = {
		value: null
	}
	handleChange = (event) => {
		this.setState({value: event.target.value})
	}
	handleSubmit = (event) => {
		event.preventDefault()
		const { poll, dispatch, history } = this.props
		dispatch(handleAnswerPoll(poll.id, this.state.value))
		history.push(`/questions/${poll.id}`)
	}
	render(){
		const { poll, author, classes } = this.props
		return (<Card className={classes.card}>
					<CardHeader title={author.name + ' asks:'}
						subheader="Would you Rather ..."
						avatar={<Avatar alt={author.name} src={author.avatarURL} className={classes.avatar}/>}
					/>
					<CardContent>
						<RadioGroup aria-label="vote" name="vote" value={this.state.value} onChange={this.handleChange}>
							<FormControlLabel value="optionOne" control={<Radio />} label={poll.optionOne.text} />
							<FormControlLabel value="optionTwo" control={<Radio />} label={poll.optionTwo.text} />
						</RadioGroup>
					</CardContent>
					<CardActions className={classes.cardActions}>
						<Button onClick={this.handleSubmit} disabled={this.state.value===null}
							className={classes.button}>Submit</Button>
					</CardActions>
		</Card>)
	}
}

const PollPage = (props) => {
	const { answered } = props
	return (<div>
			{answered ? <PollResult {...props}/> 
				: <PollVote {...props}/>}
		</div>)
}

const mapStateToProps = ({polls, authedUser, users}, ownProps) => {
	const { id } = ownProps.match.params
	return {
		poll: polls[id],
		answered: polls[id].optionOne.votes.includes(authedUser) ||
				polls[id].optionTwo.votes.includes(authedUser),
		author: users[polls[id].author],
		...ownProps
	}
}

const ConnectedPollPage = connect(mapStateToProps)(PollPage)
const ConnectedPollPageWithStyles = withStyles(styles)(ConnectedPollPage)
export default withRouter(ConnectedPollPageWithStyles)