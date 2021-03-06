import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import UserGroupsCard from './user-groups-card.js'
import {
  Grid, Divider, Icon
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const UserGroups = (props) => {
  const { email, groups } = props
  return (
    <Grid centered columns={1} padded>
    <div id="row">
      <div id="groups-header">
        <p>Your awesome groups are here. Feel free to create new groups!</p>
      </div>
    </div>
    <div id="row">  
      <div id="card-group">
        <a href="/new-group">
        <div id="group-card">
          <img id="group-img" src={`/edit10.jpeg`} />
          <div id="group-content">
            <div><p><b><Icon name="users" />Add a new group</b></p></div>
            <Divider />
            <div><p>Describe your great groups!</p></div> 
          </div>
        </div>
        </a>
        {groups ? groups.map(group =>
          (<UserGroupsCard key={group.id} group={group} />)
        ) : <div />}
      </div>
    </div>
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
