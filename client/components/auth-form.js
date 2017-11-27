import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { auth, fb } from '../store'
import FacebookLogin from 'react-facebook-login';
/*
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error, responseFacebook } = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        {displayName === 'Sign Up' &&
          <div>
            <label htmlFor="name"><small>Name</small></label>
            <input name="personname" type="name" />
          </div>}
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href="/auth/google">{displayName} with Google</a>
      <FacebookLogin
        appId={933986046768442}
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,user_friends"
        callback={responseFacebook} />
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      let name
      if (evt.target.personname) name = evt.target.personname.value
      dispatch(auth(email, password, formName, name))
    },
    responseFacebook(response) {
      const email = response.email
      const name = response.name
      const fbId = response.id
      dispatch(fb(email, name, fbId))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

// <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
