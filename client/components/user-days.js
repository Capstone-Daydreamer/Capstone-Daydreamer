import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import GroupDay from './user-days-card';

export class UserDays extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const user = this.props.user
        return (
            <Grid centered columns={1} padded>
                <div id="card-group">
                    {
                        user.id && user.groups.map(group => {
                            return (
                                group.days && group.days.map(day => <GroupDay key={day.id} group={group} day={day} /> )
                        )})
                    }
                </div>
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