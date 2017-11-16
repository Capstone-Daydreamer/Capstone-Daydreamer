import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import UserGroupsCard from './user-groups-card.js'
import {
  Container, Card, Icon
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const UserGroups = (props) => {
  const {email, groups} = props
  
  return (
    <Container>
      <h3>Welcome, {email}</h3>
      <p>Below is a list of the groups you're currently a part of. This is some unessicary filler text that the developer left behind because he was too lazy to be creative. It's sooooo much easier to know what text is gonna look like when theres actually text, so he's probably gonna put as much here as he feels like typing.... Guess what! He's back at it again since we need to make this text way longer on a full screen. Why you ask? Becuase having reactive components is hip and in right now, and the longer I keep this stream of consciousness going the more proud my inner James Joyce will be.</p>
      <Card.Group>
      <Card>
        <Card.Content header='ADD A NEW EVENT' />
        <Card.Content>                              
          <Icon name='add to calendar' />
        </Card.Content>
        <Card.Content extra>
          <Icon name='user' />
          Your Friends Could Go Here!
        </Card.Content>
      </Card>
      {groups ? groups.map(group =>
        (<UserGroupsCard key={group.id} group={group} />)
      ) : <div />}
      </Card.Group>
    </Container>
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
