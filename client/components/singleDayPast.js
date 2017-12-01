import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'

export function SingleDayPast(props) {
    const days = props.days
    return (
        <div>
            <div id="row">
                <div id="groups-header">
                    <p>Here's what you did for {days.name}</p>
                </div>
            </div>
            <div id="card-group">
                {
                    days.activities && days.activities.map((activity) => {
                        return (
                            <div id="event-group-card" key={activity.id}>
                                <img id="event-group-img" src="/edit3.jpg" />
                                <div id="event-group-content" style={{ overflowY: "scroll" }}>
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

const mapState = (state) => {
    return {
        user: state.user
    }
}

const Container = connect(mapState)(SingleDayPast)

export default Container