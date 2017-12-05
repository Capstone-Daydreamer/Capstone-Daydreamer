import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Divider, Icon
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const UserGroupsCard = (props) => {

  const { group } = props
  const num = group.days.length
  const numDays = num === 1 ? num + ' Day Spent Together!' : num + ' Days Spent Together!'
  return (
    <a href={`/user-groups/${group.id}`}><div id="group-card">
      <img id="group-img" src={`/edit${group.id}.jpeg`} />
      <div id="group-content">
      <div><p><b><Icon name="users" />{group.name}</b></p></div>
      <Divider />
      <div><p>{group.description}</p></div>
        {numDays}
      </div>
      </div>
    </a>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserGroupsCard)
