import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Image, Divider, Grid
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleDayEventCard = (props) => {
  const { yelprec } = props
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          {yelprec.map(rec => {
            return (
              <Card key={rec.id}>
                <Image src={rec.image_url} />
                <Card.Content>
                  <Card.Header>{rec.name}</Card.Header>
                  <Card.Meta>{rec.rating} stars</Card.Meta>
                  <Card.Description>{rec.location.address1 + ', ' + rec.location.city + ', ' + rec.location.state}</Card.Description>
                </Card.Content>
                <Card.Content extra><a>{rec.price}</a> </Card.Content>
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

export default connect(mapState)(SingleDayEventCard)
