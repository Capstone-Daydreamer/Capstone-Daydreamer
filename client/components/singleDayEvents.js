import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card, Item, Divider } from 'semantic-ui-react'
import {removeInterest, addInterest, destroyInterest} from '../store'

export class SingleDayEvents extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        const days = this.props.days
        return (
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
        </Grid>
        )
    }
}

const mapState = (state) => {
    return {
        days: state.days
    }
}

const mapDispatch = null

const Container = connect(mapState, mapDispatch)(SingleDayEvents)

export default Container