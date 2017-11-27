import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Image, Divider, Grid
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
                {eventfulrec.map(currentRec => {
                  return (
                    <Card
                    key={currentRec.id} onClick={() => {
                      this.handleClick(currentRec)
                      this.props.selectedEvent(currentRec, id)
                    }}>
                      <Card.Content>
                        <Card.Header>{currentRec.title}</Card.Header>
                        <Card.Meta>{currentRec.start_time}</Card.Meta>
                        <Card.Description>{currentRec.venue_address + ', ' + currentRec.city_name}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>{currentRec.venue_name} </Card.Content>
                    </Card>
                  )
                })}
              </Grid.Row>
            </Grid>
            <Divider />
          </div> :
          <div>
            <Card key={rec.id}>
              <Card.Content>
                <Card.Header>{rec.title}</Card.Header>
                <Card.Meta>{rec.start_time}</Card.Meta>
                <Card.Description>{rec.venue_address + ', ' + rec.city_name}</Card.Description>
              </Card.Content>
              <Card.Content extra>{rec.venue_name} </Card.Content>
            </Card>
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

