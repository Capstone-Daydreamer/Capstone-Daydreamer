import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Menu, Grid, Card, Item, Divider } from 'semantic-ui-react'
import AvailCard from './avail-card'
import { fetchAvailability } from '../store'


export class SingleDaySchedule extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        // const {cronofy} = this.props
        // if(cronofy === undefined){
        this.props.findGroupAvailability(this.props.days[0], this.props.match.params.groupId)
        // }
    }
    render() {
        const { cronofy } = this.props;
        const day = this.props.days
        const groupId = this.props.groupId
        return (
            <div>
                <h1>Available Times</h1>
                <Item>
                    {
                        cronofy.available_periods && cronofy.available_periods.map((period) => {
                            return (
                                <AvailCard key={period.start} period={period} day={day} groupId={groupId} />
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
        findGroupAvailability(day, groupId) {
            dispatch(fetchAvailability(day, groupId))
        }
    }
}

const Container = withRouter(connect(mapState, mapDispatch)(SingleDaySchedule))

export default Container
