import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SingleGroupCard from './single-group-member-card';
import GroupDay from './user-days-card';
import Chat from './chatbox';
import {
  Container, Card, Divider, Icon
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
      <div className="wrapper">
        <div className="users-grid">
            {users ? users.map(user => <SingleGroupCard key={user.id} group={groups} user={user} leader={groups.leader} />) : <div />}
        </div>

        <div id="groups-header group-header-grid">
          <h1>{groups.name}</h1>
          <p>{groups.description}</p>
          <a href={`/newDay/${groups.id}`}>
          <div id="day-group-card" >
          <img id="day-group-img" src="/edit5.jpg" />
          <div id="day-group-content">
              <h3>Add a new day</h3>
            </div>
          </div>
          </a>
        </div>
        <div />
        <Chat className="chat-grid" />

        <Card.Group className="days-grid">
          {days && days.map(day => <GroupDay key={day.id} day={day} group={groups} />)}
        </Card.Group>
      </div>
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
