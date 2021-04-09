import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { handleAddPoll } from '../actions/polls'
import { withRouter } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  textField: {
  	width: "100%",
  	marginBottom: theme.spacing(1)
  }
})

class NewPoll extends Component {
	state = {
		optionOne: '',
		optionTwo: ''
	}
	handleSubmit = (event) => {
		event.preventDefault()
		const { dispatch, history } = this.props
		const { optionOne, optionTwo} = this.state
		dispatch(handleAddPoll(optionOne, optionTwo))
		history.push('/')
	}
	handleChange = (event, key) => {
		this.setState({
			[key]: event.target.value
		})
	}
	render() {
		const { classes } = this.props
		return (<Paper variant='outlined' className={classes.paper}>
				<Typography variant='h6' align='center'>New question</Typography>
				<Divider />
				<Typography variant='subtitle1' gutterBottom>Complete the questions: Would you rather ...</Typography>

    			<form autoComplete="off" onSubmit={this.handleSubmit}>
					<TextField required
						label="Enter option one text here"
						variant="outlined" className={classes.textField} value={this.state.optionOne}
						onChange={(e) => this.handleChange(e, 'optionOne')}/>
					<TextField required
						label="Enter option two text here"
						variant="outlined" className={classes.textField} value={this.state.optionTwo}
						onChange={(e) => this.handleChange(e, 'optionTwo')}/>
					<Button
						type="submit"
						fullWidth
						variant="text"
						color="secondary"
						className={classes.submit}
						disabled={this.state.optionOne.trim().length===0 ||
							this.state.optionTwo.trim().length===0 }>
					Submit</Button>
				</form>
			</Paper>)
	}
}

const mapStateToProps = ({polls}, ownProps) => {
	return {
		polls,
		...ownProps
	}
}

export default withRouter(withStyles(styles)(connect(mapStateToProps)(NewPoll)))