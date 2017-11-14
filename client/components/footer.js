import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Footer = (props) => {
  // Leftover from boilerplate for reference
  const {email} = props

  return (
    <div>
      <h3>FOOTER</h3>
      <form>
        <label>Enter your email to be the first to hear about new features!</label>
        <input type="email" />
      </form>
      <ul>
        <li><b>Created By</b></li>
        <li>Ellen Ormerod</li>
        <li>Jamie Slaughter</li>
        <li>Benjamin Odisho</li>
      </ul>
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

