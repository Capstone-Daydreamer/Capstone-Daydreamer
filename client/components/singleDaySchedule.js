import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card, Item, Divider } from 'semantic-ui-react'
import { fetchAvailability } from '../store'

export class SingleDaySchedule extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        this.props.findGroupAvailability(this.props.groupId)
    }
    render() {
        const { cronofy } = this.props;

        return (
            <div>
                <h1>Available Times</h1>
                <Item>
                    {
                        cronofy.available_periods && cronofy.available_periods.map((period) => {
                            return (
                                <div key={cronofy.available_periods.indexOf(period)}>
                                    <Item.Content >
                                        <Item.Header as='a'>{period.start}</Item.Header>
                                        <Item.Header as='b'>{period.end}</Item.Header>
                                        <Item.Meta>Attendees: {period.participants.length}</Item.Meta>
                                    </Item.Content>
                                    <Divider fitted />
                                </div>
                            )
                        })
                    }
                </Item>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        days: state.days,
        cronofy: state.cronofy
    }
}

const mapDispatch = dispatch => {
    return {
        findGroupAvailability(groupId) {
            dispatch(fetchAvailability(groupId))
        }
    }
}

const Container = connect(mapState, mapDispatch)(SingleDaySchedule)

export default Container
