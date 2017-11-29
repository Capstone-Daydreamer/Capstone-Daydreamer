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
            console.log('mounted????', this.props)
        this.props.findGroupAvailability(this.props.days[0], this.props.match.params.groupId)
        // }
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
                                <AvailCard period={period} />
                                // <div key={cronofy.available_periods.indexOf(period)}>
                                //     <Item.Content >
                                //         <Item.Header as='a'>{period.start}</Item.Header>
                                //         <Item.Header as='b'>{period.end}</Item.Header>
                                //         <Item.Meta>Attendees: {period.participants.length}</Item.Meta>
                                //     </Item.Content>
                                //     <Divider fitted />
                                // </div>
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
            // console.log(this.props.days)
            console.log('looking for day', day)
            dispatch(fetchAvailability(day, groupId))
        }
    }
}

const Container = withRouter(connect(mapState, mapDispatch)(SingleDaySchedule))

export default Container
