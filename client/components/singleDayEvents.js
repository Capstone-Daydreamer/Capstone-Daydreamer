import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card, Item, Divider } from 'semantic-ui-react'
import {removeInterest, addInterest, destroyInterest} from '../store'

export class SingleDayEvents extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        const days = this.props.days
        return (
            <div>
            <div id="groups-header"><h1>Scheduled Events</h1>
            <p>Here's whats on the docket.</p>
            </div>
            <div id="card-group">
               {
                   days.activities && days.activities.map((activity) => {
                       return (
                        <div id="event-group-card" key={activity.id}>
                        <img id="event-group-img" src="/edit3.jpg" />
                        <div id="event-group-content">
                          <div><p>{activity.name}</p></div>
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
        days: state.days
    }
}

const mapDispatch = null

const Container = connect(mapState, mapDispatch)(SingleDayEvents)

export default Container