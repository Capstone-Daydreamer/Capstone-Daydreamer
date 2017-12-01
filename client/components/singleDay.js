import React from 'react'
import { connect } from 'react-redux'
import SingleDaySchedule from './singleDaySchedule'
import SingleDayEvents from './singleDayEvents'
import { fetchDay, fetchGroupInt } from '../store'
import { Grid, Loader, Container } from 'semantic-ui-react'

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
    const id = this.props.match.params.id
    this.props.loadDay(id)
  }
  render() {
    const { days } = this.props
    if (!days) return ( <Loader active />)
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
        <Grid columns={1} padded>
          {subComponent()}
        </Grid>
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
