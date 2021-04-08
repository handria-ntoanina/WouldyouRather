import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const styles = (theme) => ({
  paper: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0,0,1,0)
	},
  header: {
  	backgroundColor: theme.palette.secondary.light,
  	padding: theme.spacing(1)
  }
})

class PollItem extends Component {
	render() {
		const { pollId, polls, users, classes } = this.props
		const poll = polls[pollId]
		const user = users[poll.author]
		return (<Paper variant="outlined" className={classes.paper}>
			<Grid container>
				<Grid item xs={12}>
					<Typography component='h3' variant='subtitle1' className={classes.header}>{user.name} asks:</Typography>
				</Grid>
				<Grid item xs={4}>
					<Avatar alt={user.name} src={user.avatarURL}/>
					<Divider orientation="vertical" flexItem />
					<Typography component='h4' variant='subtitle2'>
					Would you rather
					</Typography>
					<Typography variant='body2'>
						...{poll.optionOne.text}...
					</Typography>
				</Grid>
				<Grid item xs={8}></Grid>
			</Grid>
		</Paper>)
	}
}

const mapStateToProps = ({polls, users}, ownProps) => {
	return {
		polls,
		users,
		...ownProps
	}
}

export default withStyles(styles)(connect(mapStateToProps)(PollItem))