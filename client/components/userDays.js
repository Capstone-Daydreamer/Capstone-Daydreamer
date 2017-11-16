import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Grid } from 'semantic-ui-react'

export class UserDays extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){ 
        const user = this.props.user
        return (
            <Grid centered columns={1} padded>
                <Card.Group>
                    {
                        user.id && user.groups.map((group) => {
                        return group.days && group.days.map((day) => {
                                return (
                                    <Card key={day.id}>
                                    <Card.Content>{group.name}</Card.Content>
                                    <Card.Content>{day.name}</Card.Content>
                                    {
                                        day.activities && day.activities.map((activity)=>{
                                            return (
                                            <div key={activity.id}>
                                            <Card.Content>{activity.name}</Card.Content>
                                            <Card.Content>{activity.description}</Card.Content>
                                            <Card.Content>{activity.location}</Card.Content>
                                        </div>
                                            )
                                        })
                                    }
                                    
                                </Card>
                                )
                            })
                        })
                    }
                </Card.Group>
            </Grid>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user
    }
}

const mapDispatch = null

const Container = connect(mapState, mapDispatch)(UserDays)

export default Container