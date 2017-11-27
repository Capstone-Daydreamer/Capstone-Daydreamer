import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Image, Divider, Grid
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export class SingleDayYelpCard extends React.Component {
  handleClick(rec) {
    this.chosenRender(rec)
  }

  render() {
    const { yelprec } = this.props
    return (
      <div>
        <Grid centered>
          <Grid.Row>
            {yelprec.map(rec => {
              return (
                <Card key={rec.id} onClick={() => this.handleClick(rec)}>
                  <Image src={rec.image_url} />
                  <Card.Content>
                    <Card.Header>{rec.name}</Card.Header>
                    <Card.Meta>{rec.rating} stars</Card.Meta>
                    <Card.Description>{rec.location.address1 + ', ' + rec.location.city + ', ' + rec.location.state}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>{rec.price}</Card.Content>
                </Card>
              )
            })}
          </Grid.Row>
        </Grid>
        <Divider />
      </div>
    )
  }

  chosenRender(rec) {
    return (
      <div>
        <Card key={rec.id} >
          <Image src={rec.image_url} />
          <Card.Content>
            <Card.Header>{rec.name}</Card.Header>
            <Card.Meta>{rec.rating} stars!!</Card.Meta>
            <Card.Description>{rec.location.address1 + ', ' + rec.location.city + ', ' + rec.location.state}</Card.Description>
          </Card.Content>
          <Card.Content extra>{rec.price}</Card.Content>
        </Card>
        <Divider />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {

  }
}


export default connect(mapState)(SingleDayYelpCard)
