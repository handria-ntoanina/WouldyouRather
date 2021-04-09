import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  paperChoice: {
  	borderColor: theme.palette.primary.dark
  },
  badge: {
  	width: "100%"
  },
  summary: {
  	textAlign: "center"
  }
})

class OptionResult extends Component {
	render(){
		const { option, classes, choice, total, count } = this.props
		const progress = Math.round(count * 100 / total)
		return (<Paper className={`${classes.paper}` + 
					( choice ? ` ${classes.paperChoice}`: '')} variant='outlined'>
					<Typography component='h3' variant='subtitle1' gutterBottom>Would you Rather { option.text }?
						{choice && ' (Your choice)'}
					</Typography>
					<LinearProgress variant='determinate' value={progress} color={choice ? 'primary' : 'secondary'}/>
					<Typography className={classes.summary}>{count} out of {total} votes</Typography>
		</Paper>)
	}
}

export default withStyles(styles)(OptionResult)