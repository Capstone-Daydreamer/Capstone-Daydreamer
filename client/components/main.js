import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../store'
import { Footer } from './'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = (props) => {
  const { children, handleClick, isLoggedIn } = props

  return (
    <div>
      <div className="ui inverted centered attached stackable menu">
        <nav className="ui center aligned container">
          <Link to="#" className="item"><h1 >BOILERMAKER</h1> </Link>
          <Link to="#" className="item">Daydreamer</Link>
          <Link to="#" className="item">Groups</Link>
          <Link to="#" className="item">Events</Link>
          <Link to="#" className="item">Profile</Link>
          {
            isLoggedIn
              ? <div>
                {/* The navbar will show these links after you log in */}
                <a href="/#" onClick={handleClick} className="item">Logout</a>
              </div>
              : <div>
                {/* The navbar will show these links before you log in */}
                <Link to="/login" className="item">Login</Link>
                <Link to="/signup" className="item">Sign Up</Link>
              </div>
          }
        </nav>
        <hr />
      </div>

      {children}
      <Footer />
    </div>
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
