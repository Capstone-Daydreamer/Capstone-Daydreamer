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
                {stateOfDay() ?
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
                    yelprecommend && yelprecommend.map(yelprec => <SingleDayYelpCard key={yelprec[0].id} yelprec={yelprec} /> )
                }
                {!stateOfDay() && eventfulrecommend && eventfulrecommend.map(rec => <SingleDayEventfulCard key={rec.search.events.event[0].id} eventfulrec={rec.search.events.event} />)}
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
        loadEventful(category, location, keywords){
            dispatch(eventfulPost(category, location, keywords))
        }
    }
}

const Container = connect(mapState, mapDispatch)(SingleDayEvents)

export default Container
