import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Form, Button } from 'semantic-ui-react'
import axios from 'axios'

export class UserSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formError: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(evt) {
        evt.preventDefault()
        if (evt.target.password.value === evt.target.confirmPassword.value) {
            axios.put(`/api/users/${this.props.user.id}`, { password: evt.target.password.value })
        }
    }

    render() {
        const { user } = this.props;
        return (
            <Grid centered columns={1} padded>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>New Password</label>
                        <input name="password" type="password" placeholder="Password" />
                    </Form.Field>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <input name="confirmPassword" type="password" placeholder="Confirm Password" />
                    </Form.Field>
                    <Button type="submit">Submit</Button>
                </Form>
                <Button type="submit" href={`http://127.0.0.1:8080/auth/cronofy/${user.id}`}>Authenticate with your Calendars</Button>
            </Grid>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = null

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         handleSubmit(event, id) {
//             const thunk = adminUser(id, ownProps.history);
//             dispatch(thunk);
//         }
//     }
// }

const Container = connect(mapState, mapDispatchToProps)(UserSettings)

export default Container
