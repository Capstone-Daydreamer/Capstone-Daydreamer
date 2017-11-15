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
  // const {email} = props
  const UserGroups = [
    { id: 1, title: "Benjamin Odishos Super Awesome Dance Crew", description: "Ever have the urge to dance like no ones watching while everyone is watching? Us too. We meet up on Wednesdays and every third Thursday of the month for a dance off" },
    { id: 2, title: "Ellen Ormerods Competitive Karaoke Hide-and-go-Seek League", description: "Ever have the urge to dance like no ones watching while everyone is watching? Us too. We meet up on Wednesdays and every third Thursday of the month for a dance off"},
    { id: 3, title: "Jamie Slaughters Slaughter of Badass Iguanas", description: "Ever have the urge to dance like no ones watching while everyone is watching? Us too. We meet up on Wednesdays and every third Thursday of the month for a dance off"} ]
  return (
    <Container>
      <h3>Welcome!</h3>
      <p>Below is a list of the groups you're currently a part of. This is some unessicary filler text that the developer left behind because he was too lazy to be creative. It's sooooo much easier to know what text is gonna look like when theres actually text, so he's probably gonna put as much here as he feels like typing.... Guess what! He's back at it again since we need to make this text way longer on a full screen. Why you ask? Becuase having reactive components is hip and in right now, and the longer I keep this stream of consciousness going the more proud my inner James Joyce will be.</p>
      <Card.Group>
      <Card>
        <Card.Content header = 'ADD A NEW EVENT'/>
        <Card.Content>
          <Icon name='add to calendar' />
        </Card.Content>
        <Card.Content extra>
          <Icon name='user' />
          Your Friends Could Go Here!
        </Card.Content>
      </Card>
      {UserGroups.map(group =>
        (<UserGroupsCard key={group.id} group={group} />)
      )}
      </Card.Group>
    </Container>
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

export default connect(mapState)(UserGroups)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
