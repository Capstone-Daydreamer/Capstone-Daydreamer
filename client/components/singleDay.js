import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SingleDaySchedule from './singleDaySchedule'
import SingleDayEvents from './singleDayEvents'
import { fetchDay, fetchGroupInt } from '../store'
import { Menu, Grid, Card, Icon, Button } from 'semantic-ui-react'

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

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name })
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.loadDay(id)
  }
  render() {
    const { days } = this.props
    const groupId = this.props.match.params.groupId
    const subComponent = () => {
      if (this.state.activeItem === 'schedule') {
        return <SingleDaySchedule days={days} groupId={groupId} />
      }
      if (this.state.activeItem === 'events') {
        return <SingleDayEvents days={days} />
      }
    }
    const activeItem = this.state.activeItem
    return (
      <div>
        <Menu tabular>
          <Menu.Item name='schedule' active={activeItem === 'schedule'} onClick={this.handleItemClick} />
          <Menu.Item name='events' active={activeItem === 'events'} onClick={this.handleItemClick} />
        </Menu>
        <Grid columns={1} padded>
          {subComponent()}
        </Grid>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    days: state.days,
    recommendations: state.recommendations
  }
}

const mapDispatch = dispatch => {
  return {
    loadDay(id) {
      dispatch(fetchDay(id))
      dispatch(fetchGroupInt(id))
    }
  }
}

export default connect(mapState, mapDispatch)(SingleDay)
