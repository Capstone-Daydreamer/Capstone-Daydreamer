import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeUser } from '../store'
import {
  Image, Card, Button
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleGroupCard = (props) => {
  const {user} = props
  const {group} = props
  const leader = props.userId !== props.leader
  return (
    <Card >
      <Card.Content>
        <Image floated='right' size='mini' src='https://fillmurray.com/100/100' />
        <Card.Header>
          {user.name}
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
          <Button disabled={leader} basic color='red' onClick={() => props.handleRemoveClick(group, user.id)}>Remove from Group</Button>
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
    userId: state.user.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleRemoveClick(group, id){
      dispatch(removeUser(group, id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleGroupCard)

