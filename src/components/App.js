import React, { Component, Fragment } from 'react'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  render(){
    return (
    	<Fragment>
    		<LoadingBar/>
    		<div>Would you Rather?</div>
    	</Fragment>)
  }
}

export default App
