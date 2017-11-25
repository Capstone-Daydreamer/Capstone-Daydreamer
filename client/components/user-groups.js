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
    <Grid centered columns={2}>
      <Grid.Column >
      <div id="header"><h3>Welcome, {email}</h3>
      <p>Below is a list of the groups you're currently a part of. This is some unessicary filler text that the developer left behind because he was too lazy to be creative. It's sooooo much easier to know what text is gonna look like when theres actually text, so he's probably gonna put as much here as he feels like typing.... Guess what! He's back at it again since we need to make this text way longer on a full screen. Why you ask? Becuase having reactive components is hip and in right now, and the longer I keep this stream of consciousness going the more proud my inner James Joyce will be.</p>
      </div>
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
    </Grid.Column>
    </Grid>
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
