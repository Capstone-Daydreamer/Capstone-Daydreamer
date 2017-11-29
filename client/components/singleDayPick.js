import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid, Divider } from 'semantic-ui-react'

export function SingleDayPick() {
    return (
        <div id="row">
            <div id="groups-header"><h1>Events</h1>
                <p>Hang in there. Pick a date and we will send you a list of things to do.</p>
            </div>
        </div>
    )
}

const mapState = (state) => {
    return {
        user: state.user
    }
}

const Container = connect(mapState)(SingleDayPick)

export default Container
