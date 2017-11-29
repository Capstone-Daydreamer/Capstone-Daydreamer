import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleGroupCard from './single-group-member-card';
import GroupDay from './user-days-card';
import {
  Container, Segment, Grid, Card, Button
} from 'semantic-ui-react';
import { fetchGroup } from '../store'
import { Link, withRouter } from 'react-router-dom'
import * as firebase from 'firebase';

/**
 * COMPONENT
 */
export class SingleGroup extends React.Component {
  constructor() {
    super();
    this.state = {
      item: 'default'
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.loadGroup(id)
    const rootRef = firebase.database().ref().child('test');
    const itemRef = rootRef.child('item');
    itemRef.on('value', snap => {
      this.setState({
        item: snap.val()
      })
    })
  }

  render() {
    const { groups } = this.props
    const users = groups.users
    const days = groups.days
    return (
      <Container>
        <div id="groups-header"><h1>{groups.name}</h1>
            <p>We are the coolest!!</p>
            {/* <p>{this.state.item}</p> */}
        </div>
        <Segment
          vertical
        >
          <Link to={`/newDay/${groups.id}`}><Button primary>NEW DAY!</Button></Link>
          <Container textAlign="center">
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Card.Group>
                    {users ? users.map(user => <SingleGroupCard key={user.id} group={groups} user={user} leader={groups.leader} />) : <div />}
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
