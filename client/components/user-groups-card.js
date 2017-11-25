import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Icon
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const UserGroupsCard = (props) => {

  const { group } = props
  const num = group.days.length
  const numDays = num === 1 ? num + ' Day Spent Together!' : num + ' Days Spent Together!'
  return (
    <a href={`user-groups/${group.id}`}><div id="group-card">
    <img id="group-img" src="./edit1.gif" />
    <div id="group-content">
      <div><p>{group.name}</p></div>
      <div><p>Discription or something filler-y goes here</p></div>
      <Icon name="user" />
        {numDays} 
    </div>
    </div></a>
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
