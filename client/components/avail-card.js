import React from 'react'
import { connect } from 'react-redux'
import { putDay } from '../store'
import { Icon } from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const AvailCard = (props) => {
  const period = props.period
  const day = props.day
  const groupId = props.groupId

  return (
    <div id="avail-group-card" key={period.start} onClick={(event) => { props.handleDateClick(period.start, day.id, groupId, event) }}>
      <div id="avail-group-content">
        <div>
          <p>
            <Icon disabled name="calendar outline" />
            <b>Date: {period.start.slice(0, 10)} At: {period.start.slice(11, 17)}</b>
          </p>
        </div>
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
    handleDateClick(date, dayId, groupId) {
      dispatch(putDay(date, dayId, groupId))
    }
  }
}

export default connect(mapState, mapDispatch)(AvailCard)
