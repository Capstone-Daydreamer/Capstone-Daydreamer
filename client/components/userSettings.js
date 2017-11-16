import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Header, Menu } from 'semantic-ui-react'

export class UserSettings extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){ 
        return (
            <div>
                We are in Settings
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

const Container = connect(mapState, mapDispatch)(UserSettings)

export default Container