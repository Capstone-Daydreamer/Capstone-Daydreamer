import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserGroupsCard from './user-groups-card.js'
import {
  Grid, Card, Icon
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const UserGroups = (props) => {
  const { email, groups } = props
  return (
    <div id="page">
    <div id="row">
      <div id="groups-header"><h1>Welcome, {email}</h1>
        <p>Your awesome groups are here. Feel free to create new groups!</p>
      </div>
    </div>
    <div id="row">  
      <div id="card-group">
        <a href="/new-group">
        <div id="group-card">
          <img id="group-img" src="./edit1.gif" />
          <div id="group-content">
            <div><p>Add new group</p></div>
            <div><p>Discription or something filler-y goes here</p></div>
            <Icon name="user" />
          </div>
        </div>
        </a>
        {groups ? groups.map(group =>
          (<UserGroupsCard key={group.id} group={group} />)
        ) : <div />}
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
    email: state.user.email,
    groups: state.user.groups
  }
}


export default connect(mapState)(UserGroups)

/**
 * PROP TYPES
 */
UserGroups.propTypes = {
  email: PropTypes.string
}
