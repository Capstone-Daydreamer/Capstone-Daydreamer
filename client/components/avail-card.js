import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeUser } from '../store'
import {
  Image, Card, Button, Icon
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const AvailCard = (props) => {
  const period = props.period
  console.log(period)
  return (
    <div id="avail-group-card" key={period.start}>
    <div id="avail-group-content">
      <div>
        <p><Icon disabled name='calendar outline' /><b>Date: {period.start.slice(0, 10)} At: {period.start.slice(11, 17)}</b></p></div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    cronofy: state.cronofy
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleRemoveClick(group, id){
      dispatch(removeUser(group, id))
    }
  }
}

export default connect(mapState, mapDispatch)(AvailCard)