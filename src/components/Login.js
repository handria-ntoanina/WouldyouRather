import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { login } from '../actions/authedUser'

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  label: {
  	paddingLeft: theme.spacing(1)
  }
})

class Login extends Component {
	state = {
		userId: ""
	}
	handleChange = (event) => {
		this.setState({userId: event.target.value})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.dispatch(login(this.state.userId))
	}
	render(){
    	const { classes, users } = this.props;
		return (<Paper variant="outlined" className={classes.paper}>
		        	<Typography component="h1" variant="h4">
          				Would you Rather?
        			</Typography>
        			<img src={process.env.PUBLIC_URL + '/login.jpg'} width="100%"/>
				 	<Avatar className={classes.avatar}>
		          		<LockOutlinedIcon />
		        	</Avatar>
		        	<Typography component="h2" variant="h5">
          				Sign in
        			</Typography>
					<form className={classes.form} onSubmit={this.handleSubmit}>
	        			<FormControl
								required
								fullWidth
								autoFocus>
					        <InputLabel id="username-label" 
					        		className={classes.label}>Username</InputLabel>
					        <Select labelId="username-label"
					        		value={this.state.userId}
					        		onChange={this.handleChange}
					        		variant="outlined">
			        			{
			        				Object.keys(users).map((id) => <MenuItem key={id} value={id}>{users[id].name}</MenuItem>)
			        			}
					        </Select>
					      </FormControl>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign In
						</Button>
					</form>
        		</Paper>)
	}
}

const mapStateToProps = ({users}, ownProps) => {
	return {
		users,
		...ownProps
	}
}

export default withStyles(styles)(connect(mapStateToProps)(Login))
