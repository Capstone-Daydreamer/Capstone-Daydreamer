import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleGroupCard from './single-group-member-card';
import GroupDay from './userDays-card';
import {
  Container, Segment, Grid, Card, Button
} from 'semantic-ui-react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { fetchGroup } from '../store'
import { Link, withRouter } from 'react-router-dom'
/**
 * COMPONENT
 */
export class SingleGroup extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.loadGroup(id)
  }

  render() {
    const { usergroups, groups } = this.props
    const users = groups.users
    const days = groups.days
    // let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
    // BigCalendar.momentLocalizer(moment);
    return (
      <Container>
        <h3>{groups.name}</h3>
        <p>Group Description</p>
        <Segment
          vertical
        >
        <Link to={`/newDay/${groups.id}`}><Button primary>NEW DAY!</Button></Link>
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Card.Group>
                  {users ? users.map(user => <SingleGroupCard key={user.id} user={user} leader={groups.leader}/>) : <div />}
                  </Card.Group>
                </Grid.Column>
                <Grid.Column >
                  <Card.Group>
                   {days && days.map(day => <GroupDay key={day.id} day={day} group={groups} />)}
                  </Card.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Container>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    usergroups: state.user.groups,
    groups: state.groups
  }
}

const mapDispatch = dispatch => {
  return {
    loadGroup(id) {
      dispatch(fetchGroup(id))
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(SingleGroup))

// <Grid.Column width={6}>
// <BigCalendar
//   events={[{}]}
//   views={allViews}
//   step={60}
//   defaultDate={new Date(2015, 3, 1)}
// />
// </Grid.Column>