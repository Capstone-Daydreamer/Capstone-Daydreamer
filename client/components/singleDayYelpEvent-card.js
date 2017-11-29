import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Image, Divider, Grid
} from 'semantic-ui-react'
import { postSelectedYelpActivities } from '../store'

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
    const { yelprec, recommendations } = this.props
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
                        let eventCat
                        currentRec.categories.forEach(cat => {
                          if (cat.alias === recommendations.bars){
                             eventCat = 'bars'
                          } else if (cat.alias === recommendations.restaurants){
                            eventCat = 'restaurants'
                          }
                          return eventCat
                        })
                        this.handleClick(currentRec)
                        this.props.selectedEvent(currentRec, id, eventCat)
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
const mapState = state => {
  return {
    recommendations: state.recommendations
  }
}

const mapDispatch = dispatch => {
  return {
    selectedEvent(rec, id, eventCat) {
      const name = rec.name
      const location = rec.location.address1 + ', ' + rec.location.city + ', ' + rec.location.state
      const rating = rec.rating
      const price = rec.price
      const image = rec.image_url
      const ratPrice = [rating, price]
      dispatch(postSelectedYelpActivities(name, location, id, ratPrice, image, eventCat, eventCat))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleDayYelpCard)
