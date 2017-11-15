import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
// import {
//   Header, Segment
// } from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const UserProfile = (props) => {

console.log(props)
  return (
    <Segment>
     {
       // <Header as='h1' textAlign='center'>Hi {user.email} </Header>
     }
    </Segment>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Leftover from boilerplate for reference
    user: state.user
  };
}


const Container  = withRouter(connect(mapState)(UserProfile))

export default Container
