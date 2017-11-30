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
                <Grid.Row>
                <div id="groups-header"><h1>Account Settings</h1>
                <p>Profile tweaks go here.</p>
            </div>
              </Grid.Row>
            <div id="login-form">
                <Form onSubmit={this.handleSubmit}>
                <div>
                    <Form.Field>
                        <label>New Password</label>
                        <input name="password" type="password" placeholder="Password" />
                    </Form.Field>
                    </div>
                    <div>
                    <Form.Field>
                        <label>Confirm Password</label>
                        <input name="confirmPassword" type="password" placeholder="Confirm Password" />
                    </Form.Field>
                    </div>
                    <div>
                    <Button color="teal" type="submit">Submit</Button>
                    </div>
                </Form>
                <div>
                <Button type="submit" href={`http://127.0.0.1:8080/auth/cronofy/${user.id}`}>Authenticate with your Calendars</Button>
                </div>
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
