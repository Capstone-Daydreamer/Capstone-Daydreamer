import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid, Divider } from 'semantic-ui-react'

export class UserDaysCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { day, group } = this.props
    return (
        <a href={`/user-groups/${group.id}/${day.id}`}>
        <div id="day-group-card" key={day.id}>
        <img id="day-group-img" src="/edit5.jpg" />
        <div id="day-group-content">
        <div><p><b>{day.name}</b></p></div>
        <div><p><b>
        {
          day.date !== null && day.date.slice(0, 10)
        }
        </b></p></div>
          <Divider />
            {
              day.activities && day.activities.map((activity) => {
                return (
                  <div key={activity.id}>
                    <h3>{activity.name}</h3>
                    <div><p>{activity.description}</p></div>
                    <div><p>{activity.location}</p></div>
                  </div>
                )
              })
            }
            </div>
          </div>
        </a>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user
  }
}

const mapDispatch = null

const Container = connect(mapState, mapDispatch)(UserDaysCard)

export default Container
