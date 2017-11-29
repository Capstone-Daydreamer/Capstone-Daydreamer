import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Grid } from 'semantic-ui-react'
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
        <Grid centered columns={1} padded>
        <div id="row">
          <div id="groups-header"><h1>Event Recommendations</h1>
            <p>Based on your group's interests, here is a list of events we recommend.</p>
          </div>
        </div>
        <div id="row">  
          <div id="reco-card-group">
                {
                    yelprecommend.length && yelprecommend.map(yelprec => <SingleDayYelpCard key={yelprec[0].id} yelprec={yelprec} daysId={days.id}/>)
                }
        </div>
        </div>
        <div id="row"> 
        <div id="reco-card-group">
                {
                    eventfulrecommend.length && eventfulrecommend.map(rec => rec.search.events.event && <SingleDayEventfulCard key={rec.search.events.event.id || rec.search.events.event[0].id} eventfulrec={rec.search.events.event} daysId={days.id} />)
                }
            </div>
        </div>
        </Grid>
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
