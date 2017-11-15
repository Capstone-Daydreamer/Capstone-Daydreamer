import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const Footer = (props) => {
  // Leftover from boilerplate for reference
  const { email } = props

  return (
    <Segment
      inverted
      vertical
      style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
    >
      <Container textAlign='center'>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <h3 className="ui inverted header">FOOTER</h3>
              <form className="ui form">
                <label>Enter your email to be the first to hear about new features!</label>
                <input type="email" />
              </form>
            </Grid.Column>
            <Grid.Column width={8}>
              <ul className="ui inverted link list">
                <li><b>Created By</b></li>
                <li>Ellen Ormerod</li>
                <li>Jamie Slaughter</li>
                <li>Benjamin Odisho</li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Leftover from boilerplate for reference
    email: state.user.email
  }
}

export default connect()(Footer)

/**
 * PROP TYPES
 */
// Leftover from boilerplate for reference
Footer.propTypes = {
  email: PropTypes.string
}

