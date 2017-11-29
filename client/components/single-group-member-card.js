import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeUser } from '../store'
import {
  Image, Card, Button, Item, Divider
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleGroupCard = (props) => {
  const { user } = props
  const { group } = props
  const leader = props.userId !== props.leader
  return (
    <div>
      <Item.Content >
        <Item.Header as='a'>{user.name}</Item.Header>
        <Item.Meta>User Info</Item.Meta>
      </Item.Content>
      <Divider fitted />
    </div>
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
    handleRemoveClick(group, id) {
      dispatch(removeUser(group, id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleGroupCard)

