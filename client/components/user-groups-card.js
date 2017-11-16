import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
  Card, Icon
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const UserGroupsCard = ({ group }) => {
  // const {email} = props

  return (
    <Card>
      <Card.Content header = {group.name} />
      <Card.Content description = "Discription or something filler-y goes here" />
      <Card.Content extra>
        <Icon name= "user" />
        4 Bodacious Beagles
      </Card.Content>
    </Card>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // email: state.user.email
  }
}

export default connect(mapState)(UserGroupsCard)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }