import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { Main, Landing, Login, Signup, UserHome, Events, UserProfile, UserGroups, SingleGroup, NewDay, SingleDay, NewGroup } from './components'
import { me } from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            {/* Routes commented out until actual components are ready to be rendered in */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/user-groups" component={UserGroups} />
            <Route exact path="/user-groups/:id" component={SingleGroup} />
            <Route exact path="/user-groups/:groupId/:id" component={SingleDay} />
            {/* <Route path="/Events" component={Events} /> */}
            <Route path="/profile" component={UserProfile} />
            <Route path="/newDay/:groupId" component={NewDay} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/new-group" component={NewGroup} />
            <Route path="/events" component={Events} />
            {
              isLoggedIn &&
              <Switch>
                {/* Routes placed here are only available after logging in */}
                <Route path="/home" component={UserHome} />
              </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
