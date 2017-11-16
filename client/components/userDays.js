import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

export class UserDays extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){ 
        const user = this.props.user
        return (
            <div>
                {
                    user.id && user.groups.map((group) => {
                       return group.days.map((day) => {
                            return (
                                <Card>
                                <Card.Content>{group.name}</Card.Content>
                                <Card.Content>{day.name}</Card.Content>
                                {
                                    day.activities.map((activity)=>{
                                        return (
                                        <div>
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
        </div>
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