import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserInterests from './user-interests'
import UserDays from './user-days'
import UserSettings from './user-settings'
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
        }
        const user = this.props.user
        const activeItem = this.state.activeItem
        return (
            <div>
                <div id="groups-header"><h1>Interests</h1>
                <p>Keep your interests up to date so we can keep giving sending awesome recommendations.</p>
            </div>
            
            <Menu tabular>
                <Menu.Item name='interests' active={activeItem === 'interests'} onClick={this.handleItemClick} />
                <Menu.Item name='days' active={activeItem === 'days'} onClick={this.handleItemClick} />
                <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick} />
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
