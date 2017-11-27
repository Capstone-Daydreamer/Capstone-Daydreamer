import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Image, Divider, Grid
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleDayEventfulCard = (props) => {
  const { eventfulrec } = props
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          {eventfulrec.map(rec => {
            return (
              <Card key={rec.id}>
                <Card.Content>
                  <Card.Header>{rec.title}</Card.Header>
                  <Card.Meta>{rec.start_time}</Card.Meta>
                  <Card.Description>{rec.venue_address + ', ' + rec.city_name}</Card.Description>
                </Card.Content>
                <Card.Content extra>{rec.venue_name} </Card.Content>
              </Card>
            )
          })}
        </Grid.Row>
      </Grid>
      <Divider />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {

  }
}

export default connect(mapState)(SingleDayEventfulCard)

