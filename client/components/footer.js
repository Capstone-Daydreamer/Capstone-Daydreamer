import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const Footer = (props) => {
  // Leftover from boilerplate for reference
  const { email } = props

  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
        <div className="ui stackable inverted divided grid">
          <div className="eight wide column">
            <h3 className="ui inverted header">FOOTER</h3>
            <form className="ui form">
              <label>Enter your email to be the first to hear about new features!</label>
              <input type="email" />
            </form>
          </div>
          <div className="eight wide column">
            <ul className="ui inverted link list">
              <li><b>Created By</b></li>
              <li>Ellen Ormerod</li>
              <li>Jamie Slaughter</li>
              <li>Benjamin Odisho</li>
            </ul>
          </div>
        </div>
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

