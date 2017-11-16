import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Image, Card, Button
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleGroupCard = () => {

  return (
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://fillmurray.com/100/100' />
        <Card.Header>
          Member Name
      </Card.Header>
        <Card.Meta>
          Subheader?
      </Card.Meta>
        <Card.Description>
          List of dates free?
                    </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>Send Message</Button>
          <Button basic color='red'>Remove from Group</Button>
        </div>
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

export default connect(mapState)(SingleGroupCard)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
