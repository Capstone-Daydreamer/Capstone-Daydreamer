import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card } from 'semantic-ui-react'
import {removeInterest, addInterest, destroyInterest} from '../store'

export class SingleDaySchedule extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() { 
        return (
            <div>in scheduling </div>
        )
    }
}

const mapState = (state) => {
    return {
        days: state.days
    }
}

const mapDispatch = null

const Container = connect(mapState, mapDispatch)(SingleDaySchedule)

export default Container