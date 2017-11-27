import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card, Item, Divider } from 'semantic-ui-react'
import { removeInterest, addInterest, destroyInterest, yelpSearch } from '../store'
import SingleDayEventCard from './singleDayEvent-card'

export class SingleDayEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        const { recommendations } = this.props
        const location = '60067'
        const keys = Object.keys(recommendations)
        const arr = []
        keys.forEach(key => {
            if (key === 'Bars' || key === 'Restaurants') {
                arr.push(key, recommendations[key])
            }
        })
        if (arr.length === 2) this.props.loadGroup(arr[0], location, arr[1])
        if (arr.length === 4) {
            this.props.loadGroup(arr[0], location, arr[1])
            this.props.loadGroup(arr[2], location, arr[3])
        }
    }
    render() {
        const { days, yelprecommend } = this.props
        const event = new Date(days.date)
        const stateOfDay = () => {
            const sec = days.createdAt && event.getTime() - Date.now()

            if (sec < 0) {
                return true
            } else {
                return false
            }
        }
        return (
            <div>
                {stateOfDay() ? <div>
                <div id="row">
                    <div id="groups-header"><h1>Scheduled Events</h1>
                        <p>Here's whats on the docket.</p>
                    </div>
                </div>
                
                <div id="card-group">
                {
                    days.activities && days.activities.map((activity) => {
                        return (
                            <div id="event-group-card" key={activity.id}>
                            <img id="event-group-img" src="/edit3.jpg" />
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
                </div> :
                    yelprecommend && yelprecommend.map(yelprec => <SingleDayEventCard key={yelprec[0].id} yelprec={yelprec} />)
                }
                {/* {stateOfDay() ?
                    <Grid columns={8} padded>
                        <Item.Group>
                            <Item>
                                {
                                    days.activities && days.activities.map((activity) => {
                                        return (
                                            <div key={activity.id}>
                                                <Item.Content >
                                                    <Item.Header as='a'>{activity.name}</Item.Header>
                                                    <Item.Meta>{activity.description}</Item.Meta>
                                                    <Item.Description>{activity.location}</Item.Description>
                                                </Item.Content>
                                                <Divider fitted />
                                            </div>
                                        )
                                    })
                                }
                            </Item>
                        </Item.Group>
                    </Grid> :
                    yelprecommend && yelprecommend.map(yelprec => <SingleDayEventCard key={yelprec[0].id} yelprec={yelprec} />)
                } */}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        days: state.days,
        yelprecommend: state.yelprecommend,
        recommendations: state.recommendations
    }
}

const mapDispatch = dispatch => {
    return {
        loadGroup(term, location, categories) {
            dispatch(yelpSearch(term, location, categories))
        }
    }
}

const Container = connect(mapState, mapDispatch)(SingleDayEvents)

export default Container
