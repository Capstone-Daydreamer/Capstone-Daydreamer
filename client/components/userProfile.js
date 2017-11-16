import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInterests from './userInterests'
import UserDays from './userDays'
import UserSettings from './userSettings'
import UserFriends from './userFriends'
import { Segment, Header, Menu } from 'semantic-ui-react'

export class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: 'interests'
        }
        this.handleItemClick = this.handleItemClick.bind(this)
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){  
        const subComponent = () =>{
            if (this.state.activeItem === 'interests'){
                return <UserInterests />
            }
            if (this.state.activeItem === 'days'){
                return <UserDays />
            }
            if (this.state.activeItem === 'settings'){
                return <UserSettings />
            }
            if (this.state.activeItem === 'friends'){
                return <UserFriends />
            }
        }
        const user = this.props.user
        const activeItem = this.state.activeItem
        return (
            <div>
                <Segment>
                {
                user.email && <Header as='h3' textAlign='center'> Hi {user.name}</Header>
                } 
                </Segment>
                <Menu tabular>
                    <Menu.Item name='interests' active={activeItem === 'interests'} onClick={this.handleItemClick} />
                    <Menu.Item name='days' active={activeItem === 'days'} onClick={this.handleItemClick} />
                    <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick} />
                    <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
              </Menu>
              {subComponent()}
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

const Container = connect(mapState, mapDispatch)(UserProfile)

export default Container
