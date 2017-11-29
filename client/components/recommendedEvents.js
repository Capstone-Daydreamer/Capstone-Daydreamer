import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider } from 'semantic-ui-react'
import { yelpSearch, eventfulPost } from '../store'
import SingleDayYelpCard from './singleDayYelpEvent-card'
import SingleDayEventfulCard from './singleDayEventfulEvent-card'

export class RecommendedEvents extends Component {
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
            if (key === 'Bars' || key === 'Restaurants') {
                this.props.loadYelp(key, location, recommendations[key])
            } else {
                this.props.loadEventful(key, location, recommendations[key])
            }
        })
    }
    render() {
        const { days, yelprecommend, eventfulrecommend } = this.props
        const event = new Date(days.date)
    return (
            <div>
                {
                    yelprecommend.length && yelprecommend.map(yelprec => <SingleDayYelpCard key={yelprec[0].id} yelprec={yelprec} daysId={days.id}/>)
                }
                {
                    eventfulrecommend.length && eventfulrecommend.map(rec => rec.search.events.event && <SingleDayEventfulCard key={rec.search.events.event.id || rec.search.events.event[0].id} eventfulrec={rec.search.events.event} daysId={days.id} />)
                }
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

const Container = connect(mapState, mapDispatch)(RecommendedEvents)

export default Container
