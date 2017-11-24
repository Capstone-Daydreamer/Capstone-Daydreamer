import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Image
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleDayEventCard = (props) => {
  console.log('PROPS', props)
  const { yelprec } = props
  return (
    <Card >
    <Image src={yelprec.image_url} />
      <Card.Content>
      <Card.Header>{yelprec.name}</Card.Header>
      <Card.Meta>{yelprec.rating}</Card.Meta>
      <Card.Description>{yelprec.location.address1 + ', ' + yelprec.location.city + ', ' + yelprec.location.state}</Card.Description>
      </Card.Content>
      <Card.Content extra><a>{yelprec.price}</a> </Card.Content>
    </Card>
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
