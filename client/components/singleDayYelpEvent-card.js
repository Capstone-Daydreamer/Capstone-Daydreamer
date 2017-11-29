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
                    <div id="reco-card"
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
                      <img id="reco-img" src={currentRec.image_url} />
                      <div id="reco-content">
                        <div><p><b>{currentRec.name}</b></p></div>
                        <Divider />
                        <div><p>{currentRec.location.address1 + ', ' + currentRec.location.city + ', ' + currentRec.location.state}</p></div>
                        <div><p>{currentRec.price}</p></div>
                      </div>
                    </div>
                  )
                })}
              </Grid.Row>
            </Grid>
            <Divider />
          </div> :
          <div>
            <div id="reco-card">
            <img id="reco-img" src={rec.image_url} />
            <div id="reco-content">
              <Divider />
              <div><p>{rec.location.address1 + ', ' + rec.location.city + ', ' + rec.location.state}</p></div>
              <div><p>{rec.price}</p></div>
              <div><p>{rec.rating} stars!!</p></div>
            </div>
          </div>
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
