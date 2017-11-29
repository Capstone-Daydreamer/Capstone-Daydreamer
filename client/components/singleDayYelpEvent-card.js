import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Image, Divider, Grid
} from 'semantic-ui-react'
import { postSelectedYelpActivities, checkEvents } from '../store'

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

  componentDidMount() {
    const id = this.props.daysId
    this.props.checkSelectedEvents(id)
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
                    <div id="reco-card"
                      key={currentRec.id} onClick={() => {
                        this.handleClick(currentRec)
                        this.props.selectedEvent(currentRec, id)
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
const mapDispatch = dispatch => {
  return {
    selectedEvent(rec, id) {
      const name = rec.name
      const location = rec.location.address1 + ', ' + rec.location.city + ', ' + rec.location.state
      const rating = rec.rating
      const price = rec.price
      const image = rec.image_url
      dispatch(postSelectedYelpActivities(name, location, id, rating, price, image))
    },
    checkSelectedEvents(id) {
      // dispatch(checkEvents(id))
    }
  }
}

export default connect(null, mapDispatch)(SingleDayYelpCard)
