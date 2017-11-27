import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card, Item, Divider } from 'semantic-ui-react'
import { removeInterest, addInterest, destroyInterest, yelpSearch, eventfulPost } from '../store'
import SingleDayYelpCard from './singleDayYelpEvent-card'
import SingleDayEventfulCard from './singleDayEventfulEvent-card'

export class SingleDayEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        const { recommendations } = this.props
        const location = 'Chicago, IL'
        const keys = Object.keys(recommendations)
        keys.forEach(key => {
            if (key === 'bars' || key === 'restaurants') {
                this.props.loadYelp(key, location, recommendations[key])
            } else {
                this.props.loadEventful(key, location, recommendations[key])
            }
        })
    }
    render() {
        const { days, yelprecommend, eventfulrecommend } = this.props
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
                    yelprecommend && yelprecommend.map(yelprec => <SingleDayYelpCard key={yelprec[0].id} yelprec={yelprec} daysId={days.id}/>)
                }
                {!stateOfDay() && eventfulrecommend && eventfulrecommend.map(rec => <SingleDayEventfulCard key={rec.search.events.event[0].id} eventfulrec={rec.search.events.event} daysId={days.id} />)}
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
                    yelprecommend && yelprecommend.map(yelprec => <SingleDayYelpCard key={yelprec[0].id} yelprec={yelprec} daysId={days.id}/> )
                }
                {!stateOfDay() && eventfulrecommend && eventfulrecommend.map(rec => <SingleDayEventfulCard key={rec.search.events.event[0].id} eventfulrec={rec.search.events.event} daysId={days.id}/>)}
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
        recommendations: state.recommendations,
        eventfulrecommend: state.eventfulrecommend
    }
}

const mapDispatch = dispatch => {
    return {
        loadYelp(term, location, categories) {
            dispatch(yelpSearch(term, location, categories))
        },
        loadEventful(category, location, keywords) {
            dispatch(eventfulPost(category, location, keywords))
        }
    }
}

const Container = connect(mapState, mapDispatch)(SingleDayEvents)

export default Container
