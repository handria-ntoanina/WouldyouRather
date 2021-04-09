import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(9),
    height: theme.spacing(9)
  },
  table: {
  	width: "100%"
  },
  container: {
  	alignItems: "center"
  }
})

class UserScore extends Component {
	render(){
		const { user, classes } = this.props
		return (
				<Paper variant='outlined' className={classes.paper}>
					<Grid container className={classes.container} spacing={2} justify="space-evenly">
						<Grid item xs={2} >
							<Avatar alt={user.name} src={user.avatarURL} className={classes.avatar}/>
						</Grid>
						<Divider orientation="vertical" flexItem />
						<Grid item xs={6}>
							<Typography variant='h6'>{user.name}</Typography>
							<table className={classes.table}>
								<tbody>
									<tr>
										<td><Typography variant='body2'>Answered questions</Typography>
										</td>
										<td><Typography variant='body2'>{Object.keys(user.answers).length}</Typography></td>
									</tr>
									<tr>
										<td colSpan={2}><Divider/></td>
									</tr>
									<tr>
										<td><Typography variant='body2'>Created questions</Typography></td>
										<td><Typography variant='body2'>{user.questions.length}</Typography></td>
									</tr>
								</tbody>
							</table>
						</Grid>
						<Divider orientation="vertical" flexItem />
						<Grid item xs={2}>
							<table className={classes.table}>
								<thead>
									<tr><th>
										<Typography variant='h6'>Score</Typography>
									</th></tr>
								</thead>
								<tbody>
									<tr><td align="center">
										<Avatar>{Object.keys(user.answers).length + user.questions.length}</Avatar>
									</td></tr>
								</tbody>
							</table>
						</Grid>
					</Grid>
				</Paper>
			)
	}
}

export default withStyles(styles)(UserScore)