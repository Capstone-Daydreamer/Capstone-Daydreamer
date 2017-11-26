import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container, Grid, Icon
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const Footer = (props) => {
  // Leftover from boilerplate for reference
  const { email } = props

  return (
    <div id="footer">
        <div id="footer-left">
          <div>
           <h3><Icon name='copyright' /> Daydreamer 2017</h3>
          </div>
        </div>
        <div id="footer-right">
        <ul>
        <b>Created By</b>
          <li>Ellen Ormerod</li>
          <li>Jamie Slaughter</li>
          <li>Benjamin Odisho</li>
        </ul>
        </div>
        </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Leftover from boilerplate for reference
    email: state.user.email
  }
}

export default connect()(Footer)

/**
 * PROP TYPES
 */
// Leftover from boilerplate for reference
Footer.propTypes = {
  email: PropTypes.string
}

