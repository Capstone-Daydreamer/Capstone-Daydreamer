import React, { Component } from 'react'
import { connect } from 'react-redux'
import { yelpSearch, eventfulPost } from '../store'
import SingleDayPick from './singleDayPick'
import SingleDayPast from './singleDayPast'
import SingleDayConfirmed from './singleDayConfirmed'
import RecommendedEvents from './recommendedEvents'

export class SingleDayEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { days, recommendations } = this.props
        const event = new Date(days.date)
        const stateOfDay = () => {
            const sec = days.createdAt && event.getTime() - Date.now()

            if (sec < 0) {
                return true
            } else {
                return false
            }
        }

        const renderDayState = () => {
            if (days.date === null){
                return <SingleDayPick />
            } else if (stateOfDay()){
               return <SingleDayPast days={days} />
            } else if ( !stateOfDay() && days.activities.length > 0){
                return <SingleDayConfirmed days={days} />
            } else {
                if (Object.keys(recommendations).length){
                    return <RecommendedEvents recommendations={recommendations} />
                }
                return <div> </div>
            }
        }

        return (

                renderDayState()
 
        )
    }
}

const mapState = (state) => {
    return {
        days: state.days,
        recommendations: state.recommendations
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
