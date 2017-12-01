import React from 'react'
import { connect } from 'react-redux'
import { updateInterest, updateDisinterest, addInterest, addDisinterest } from '../store'
import {
  Icon, Card, Button
} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export class UserInterestCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btnClass: 'interest-card'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(color) {
    if (color === 'green') {
      this.setState({ btnClass: 'interest-card-like' })
    } else {
      this.setState({ btnClass: 'interest-card-dislike' })
    }
  }

  render() {

    const { user, userSubCategories, subCategory } = this.props
    const userLikes = userSubCategories.like && userSubCategories.like.map((like) => {
      return like.subCategoryId
    })
    const userDislikes = userSubCategories.dislike && userSubCategories.dislike.map((dislike) => {
      
      return dislike.subCategoryId
    })
    const userInterest = (subCat) => {
      if (userLikes.length && userLikes.indexOf(subCat.id) !== -1) {
        return 'green'
      } else if (userDislikes.length && userDislikes.indexOf(subCat.id) !== -1) {
        return 'red'
      }
      return 'black'
    }
    return (
      <Card className={userInterest(subCategory)} >
        <Card.Content>
          <Card.Header className="interest-card-text">{subCategory.name}</Card.Header>
          <Button
            className="interest-card-button" positive compact value="like" onClick={(evt) => {
              this.props.handleIntUpdate(evt, subCategory, userInterest(subCategory), user)
            }} >
            <Icon color="green" name="thumbs up" />
          </Button>
          <Button
            className="interest-card-button" negative compact value="dislike" onClick={(evt) => {
              this.props.handleIntUpdate(evt, subCategory, userInterest(subCategory), user)
            }} >
            <Icon color="red" name="thumbs down" />
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch) => {
  return {
    handleIntUpdate(e, cat, color, user) {
      if (e.target.value === 'like' && color === 'red') {
        dispatch(updateInterest(user.id, cat.id))
      } else if (e.target.value === 'like' && color === 'black') {
        dispatch(addInterest(user.id, cat.id))
      } else if (e.target.value === 'dislike' && color === 'black') {
        dispatch(addDisinterest(user.id, cat.id))
      } else if (e.target.value === 'dislike' && color === 'green') {
        dispatch(updateDisinterest(user.id, cat.id))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(UserInterestCard)
