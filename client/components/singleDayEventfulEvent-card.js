import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Divider, Grid
} from 'semantic-ui-react'
import { postSelectedEventfulActivities } from '../store'

/**
 * COMPONENT
 */
export class SingleDayEventfulCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bool: true,
      rec: undefined
    }
  }

  handleClick(rec) {
    this.setState({ bool: false, rec: rec })
  }

  render() {
    const { eventfulrec } = this.props
    const rec = this.state.rec
    const id = this.props.daysId
    return (
      <div>
        {this.state.bool ?
          <div>
            <Grid centered>
              <Grid.Row>
                {eventfulrec.length ? eventfulrec.map(currentRec => {
                  return (
                    <div
                      id="reco-card"
                      key={currentRec.id} onClick={() => {
                        this.handleClick(currentRec)
                        this.props.selectedEvent(currentRec, id)
                      }}>
                      <img id="reco-img" src="/edit5.jpg" />
                      <div id="reco-content">
                        <div><p><b>{currentRec.title}</b></p></div>
                        <Divider />
                        <div><p>{currentRec.start_time}</p></div>
                        <div><p>{currentRec.venue_address + ', ' + currentRec.city_name}</p></div>
                        <div><p>{currentRec.venue_name}</p></div>
                      </div>
                    </div>
                  )
                }) : <Card
                  key={eventfulrec.id} onClick={() => {
                    this.handleClick(eventfulrec)
                    this.props.selectedEvent(eventfulrec, id)
                  }}>
                    <Card.Content>
                      <Card.Header>{eventfulrec.title}</Card.Header>
                      <Card.Meta>{eventfulrec.start_time}</Card.Meta>
                      <Card.Description>{eventfulrec.venue_address + ', ' + eventfulrec.city_name}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>{eventfulrec.venue_name} </Card.Content>
                  </Card>}
              </Grid.Row>
            </Grid>
            <Divider />
          </div> :
          <div>
            <div
              id="reco-card"
              key={rec.id}>
              <img id="reco-img" src="/edit5.jpg" />
              <div id="reco-content">
                <div><p><b>{rec.title}</b></p></div>
                <Divider />
                <div><p>{rec.start_time}</p></div>
                <div><p>{rec.venue_address + ', ' + rec.city_name}</p></div>
                <div><p>{rec.venue_name}</p></div>
              </div>
            </div>
          </div>}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapDispatch = dispatch => {
  return {
    selectedEvent(rec, id) {
      const name = rec.title
      const location = rec.venue_address + ', ' + rec.city_name
      const venueName = rec.venue_name
      const time = rec.start_time
      dispatch(postSelectedEventfulActivities(name, location, id, venueName, time))
    }
  }
}

export default connect(null, mapDispatch)(SingleDayEventfulCard)

