import React from 'react';
import { connect } from 'react-redux';
import SingleGroupCard from './single-group-member-card';
import GroupDay from './user-days-card';
import Chat from './chatbox';
import {
  Container, Card,
} from 'semantic-ui-react';
import singleDay from './singleDay'
import { fetchGroup } from '../store'
import { withRouter } from 'react-router-dom'
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
        <div className="groups-header w3-twothird">
          <h1>{groups.name}</h1>
          <p>{groups.description}</p>
          <Card.Group className="days-grid">
            <a href={`/newDay/${groups.id}`}>
              <div id="day-group-card" >
                <img id="day-group-img" src="/edit5.jpg" />
                <div id="day-group-content">
                  <h3>Add a new day</h3>
                </div>
              </div>
            </a>
            {days && days.map(day => <GroupDay key={day.id} day={day} group={groups} style={{ width: '200px' }} />)}
          </Card.Group>
        </div>

        <div className="users-grid w3-third w3-light-grey" style={{padding: '0px 15px'}}>
          <singleDay />
          {users ? users.map(user => <SingleGroupCard key={user.id} group={groups} user={user} leader={groups.leader} />) : <div />}
          <Chat className="chat-grid" />
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
