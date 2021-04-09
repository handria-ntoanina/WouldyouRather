/*This was taken from https://material-ui.com/components/tabs/*/
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

class TabPanel extends Component {
  static propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  }
  render(){
    const { children, value, index, ...other } = this.props

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Fragment>
            {children}
          </Fragment>
        )}
      </div>
    )
  }
}

export default TabPanel