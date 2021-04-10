import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  }
})

class NotFound extends Component {
	render(){
		const { classes } = this.props
		return (<Grid container alignItems="center" spacing={1}>
					<Grid item xs={3}>
						<Avatar className={classes.avatar}>?</Avatar>
					</Grid>
					<Grid item xs={9}>
						<Typography variant='h6' mb={10}>404</Typography>
						<Typography variant='body2' gutterBottom>Sorry, we can't seem to find the page you are looking for</Typography>
						<Button component={Link} to="/" variant="contained" color="primary">
							Go back to home
						</Button>
					</Grid>
			</Grid>)
	}
}

export default withStyles(styles)(NotFound)