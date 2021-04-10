import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from './TabPanel'
import PollItem from './PollItem'

class Home extends Component {
	state = {
		value: 'unanswered'
	}
	handleChange = (event, newValue) => {
		this.setState({value: newValue})
	}
	a11yProps = (index) => {
		return {
			id: `wrapped-tab-${index}`,
			'aria-controls': `wrapped-tabpanel-${index}`
		}
	}
	render(){
		const { value } = this.state
		const { unanswered, answered } = this.props
		return (<Fragment>
				<Tabs value={value} 
					onChange={this.handleChange}
					aria-label="Choose between unanswered and answered poll"
					centered>
					<Tab value="unanswered"
						label="Unanswered"
						wrapped
						{...this.a11yProps('unanswered')}/>
					<Tab value="answered"
						label="Answered"
						wrapped
						{...this.a11yProps('answered')}/>
				</Tabs>
			<TabPanel value={value} index='unanswered'>
				{ unanswered.map((id) =>(
					<PollItem pollId={id} key={id}></PollItem>
					)) }
			</TabPanel>
			<TabPanel value={value} index='answered'>
				{ answered.map((id) =>(
					<PollItem pollId={id} key={id}></PollItem>
					)) }
			</TabPanel>
		</Fragment>)
	}
}

const mapStateToProps = ({ polls, authedUser, users }) => {
	const currentUser = users[authedUser]
	return {
		unanswered: Object.keys(polls).filter((id) => 
			!Object.keys(currentUser.answers).includes(id))
			.sort((a, b) => polls[b].timestamp - polls[a].timestamp),
		answered: Object.keys(polls).filter((id) => 
			Object.keys(currentUser.answers).includes(id))
			.sort((a, b) => polls[b].timestamp - polls[a].timestamp)
	}
}

export default connect(mapStateToProps)(Home)