import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import { Footer } from './'
import {
  Container, Menu
} from 'semantic-ui-react'
/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children, handleClick, isLoggedIn } = props

  return (
    <div id="site">
      <header>
    <div className="container">
      <nav>
        <ul>
          <li><a href="/">Daydreamer |</a></li>
          <li><a href="/user-groups">Groups |</a></li>
          <li><a href="/events">Events |</a></li>
          <li><a href="/profile">Profile |</a></li>
          {
            isLoggedIn
            ? <span>
                {/* The navbar will show these links after you log in */}
                <li>
                  <a href="/#" onClick={handleClick}>Logout |</a>
                </li>
              </span>
              : <span>
                {/* The navbar will show these links before you log in */}
                <li><a href="/login">Login |</a></li>
                <li><a href="/signup">Sign Up |</a></li>
              </span>
          }
          </ul>
        </nav>
          </div>
        </header>
        <div id="site-content">
      {children}
      </div>
      <Footer />
    </div >
  )
}
/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
