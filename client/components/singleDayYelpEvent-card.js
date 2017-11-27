import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Image, Divider, Grid
} from 'semantic-ui-react'
import { postSelectedActivities } from '../store'

/**
 * COMPONENT
 */
export class SingleDayYelpCard extends React.Component {
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
    const { yelprec } = this.props
    const rec = this.state.rec
    const id = this.props.daysId
    return (
      <div>
        {this.state.bool ?
          <div>
            <Grid centered>
              <Grid.Row>
                {yelprec.map(currentRec => {
                  return (
                    <Card
                      key={currentRec.id} onClick={() => {
                        this.handleClick(currentRec)
                        this.props.selectedEvent(currentRec, id)
                      }}>
                      <Image src={currentRec.image_url} />
                      <Card.Content>
                        <Card.Header>{currentRec.name}</Card.Header>
                        <Card.Meta>{currentRec.rating} stars</Card.Meta>
                        <Card.Description>{currentRec.location.address1 + ', ' + currentRec.location.city + ', ' + currentRec.location.state}</Card.Description>
                      </Card.Content>
                      <Card.Content extra>{currentRec.price}</Card.Content>
                    </Card>
                  )
                })}
              </Grid.Row>
            </Grid>
            <Divider />
          </div> :
          <div>
            <Card >
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
        }
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
      const name = rec.name
      const location = rec.location.address1 + ', ' + rec.location.city + ', ' + rec.location.state
      dispatch(postSelectedActivities(name, location, id))
    }
  }
}

export default connect(null, mapDispatch)(SingleDayYelpCard)
