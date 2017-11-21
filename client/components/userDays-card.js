import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid } from 'semantic-ui-react'

export class UserDaysCard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { day } = this.props
    return (
      <Grid centered columns={1} padded>
        <Card.Group>

          <Card key={day.id} href={`group/${day.id}`}>
            <Card.Content>
              <h3>{day.name}</h3>
              <Card.Content className="meta">
              {day.date.slice(0, 10)}
            </Card.Content>
            </Card.Content>
            <div className="ui divider" />
            {
              day.activities && day.activities.map((activity) => {
                return (
                  <div key={activity.id}>
                    <h3>{activity.name}</h3>
                    <Card.Content>{activity.description}</Card.Content>
                    <Card.Content className="meta">{activity.location}</Card.Content>
                  </div>
                )
              })
            }

          </Card>

        </Card.Group>
      </Grid>
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
