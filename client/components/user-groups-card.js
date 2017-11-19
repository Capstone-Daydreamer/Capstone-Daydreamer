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
    <Card href={`user-groups/${group.id}`}>
      <Card.Content header={group.name} />
      <Card.Content description="Discription or something filler-y goes here" />
      <Card.Content extra>
        <Icon name="user" />
        {numDays} 
      </Card.Content>
    </Card>
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
