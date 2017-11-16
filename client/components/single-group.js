import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleGroupCard from './single-group-member-card';
import {
  Container, Segment, Grid, Card,
} from 'semantic-ui-react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

/**
 * COMPONENT
 */
export const SingleGroup = () => {

  let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
  BigCalendar.momentLocalizer(moment);
  return (
    <Container>
      <h3>Group Name</h3>
      <p>Group Description</p>
      <Segment
        vertical
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={4}>
                <Card.Group>

                  <SingleGroupCard />
                  <SingleGroupCard />
                  <SingleGroupCard />

                </Card.Group>
              </Grid.Column>
              <Grid.Column width={6}>
                <BigCalendar
                  events={[{}]}
                  views={allViews}
                  step={60}
                  defaultDate={new Date(2015, 3, 1)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // email: state.user.email
  }
}

export default connect(mapState)(SingleGroup)

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string
// }
