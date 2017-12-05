import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

export class Events extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const activities = this.props.activities
        return (
            <div>
            <div id="groups-header">
            <p>Looking for where you've been and what you've done? Look no further.</p>
            </div>
            <div id="card-group">
               {
                   activities && activities.map((activity) => {
                       return (
                        <div id="event-group-card" key={activity.id}>
                        <img id="event-group-img" src={`/edit${activity.id}.jpeg`} />
                        <div id="event-group-content">
                          <div><p><b>{activity.name}</b></p></div>
                          <Divider />
                          <div><p>{activity.description}</p></div>
                          <div><p>{activity.location}</p></div>
                        </div>
                      </div>
                )
                })
               }
              
              </div>
              </div>
        )
    }
}

const mapState = (state) => {
    return {
        activities: state.user.activities
    }
}

const mapDispatch = null

const Container = connect(mapState, mapDispatch)(Events)

export default Container
