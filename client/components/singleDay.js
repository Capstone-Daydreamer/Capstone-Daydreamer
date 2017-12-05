import React from 'react'
import { connect } from 'react-redux'
import SingleDaySchedule from './singleDaySchedule'
import SingleDayEvents from './singleDayEvents'
import { fetchDay, fetchGroupInt, fetchGroup } from '../store'
import { Grid, Loader, Container } from 'semantic-ui-react'
import Chat from './chatbox'
import SingleGroupCard from './single-group-member-card';

/**
 * COMPONENT
 */
export class SingleDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'schedule'
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(event, { name }) {
    this.setState({ activeItem: name })
  }

  componentDidMount() {
    const groupId = this.props.match.params.groupId
    const id = this.props.match.params.id
    this.props.loadDay(id, groupId)
  }
  render() {
    const { days, groups } = this.props
    if (!days || !groups) return (<Loader active />)
    const users = groups.users
    const groupId = this.props.match.params.groupId
    const subComponent = () => {
      if (!days.date) {
        return <SingleDaySchedule days={days} groupId={groupId} />
      }
      else {
        return <SingleDayEvents days={days} />
      }
    }
    return (
      <Container>
        <div className="w3-twothird">
          {subComponent()}
        </div>
        <div className="users-grid w3-third w3-light-grey" style={{ padding: '0px 15px' }}>
          {users ? users.map(user => <SingleGroupCard key={user.id} group={groups} user={user} leader={groups.leader} />) : <div />}
          <Chat className="chat-grid" groupId={groupId} />
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
    days: state.days,
    groups: state.groups,
    recommendations: state.recommendations
  }
}

const mapDispatch = dispatch => {
  return {
    loadDay(id, groupId) {
      dispatch(fetchDay(id))
      dispatch(fetchGroupInt(id))
      dispatch(fetchGroup(groupId))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleDay)
