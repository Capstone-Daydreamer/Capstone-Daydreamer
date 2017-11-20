import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card, Icon, Button
} from 'semantic-ui-react'
import { fetchDay } from '../store'

/**
 * COMPONENT
 */
export class SingleDay extends React.Component {

  componentDidMount(){
      const id = this.props.match.params.id
      this.props.loadDay(id)
    }
  render(){
      const { days } = this.props
    const today = new Date()
    const stateOfDay = () =>{
      const sec = days.createdAt && days.createdAt.getTime() - Date.now()
      if(sec < 0){
        return true
      } else {
        return false
      }
    }
      return (
        <div>{stateOfDay()}</div>
      )

  }

}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    days: state.days
  }
}

const mapDispatch = dispatch => {
    return {
        loadDay(id){
            dispatch(fetchDay(id))
        }
    }
}

export default connect(mapState, mapDispatch)(SingleDay)
