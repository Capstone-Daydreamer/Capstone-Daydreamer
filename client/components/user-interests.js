import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card, Button, Icon } from 'semantic-ui-react'
import { fetchCategories, fetchSubCategories, addInterest, addDisinterest, fetchUserSubCategories, updateDisinterest, updateInterest } from '../store'

export class UserInterests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: '',
            activeItemId: -1,
        }
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    componentDidMount() {
        const id = this.props.user.id
        this.props.loadInitialData(id)
    }

    handleItemClick = (e, cat) => {
        this.setState({ activeItem: cat.name, activeItemId: cat.id })
    }


    render() {
        const { user, userSubCategories, categories } = this.props
        const { rating } = this.state
        const userLikes = userSubCategories.like && userSubCategories.like.map((like) => {
            return like.subCategoryId
        })
        const userDislikes = userSubCategories.dislike && userSubCategories.dislike.map((dislike) => {
            return dislike.subCategoryId
        })
        const activeItem = this.state.activeItem
        const subCategories = this.props.subCategories.length > 0 && this.props.subCategories.filter((subCategory) => {
            if (this.state.activeItemId === -1) {
                return subCategory
            } return subCategory.categories[0].id === this.state.activeItemId
        })
        const userInterest = (subCategory) => {
            if (userLikes.length && userLikes.indexOf(subCategory.id) !== -1) {
                return 'green'
            } else if (userDislikes.length && userDislikes.indexOf(subCategory.id) !== -1) {
                return 'red'
            }
            return 'black'
        }
        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu pointing secondary vertical>
                        <Menu.Item name="All" active={activeItem === "All"} onClick={(evt) => this.handleItemClick(evt, { name: name, id: -1 })} />
                        {
                            categories && categories.map((category) => {
                                return <Menu.Item key={category.id} name={category.name} active={activeItem === category.name} onClick={(evt) => this.handleItemClick(evt, category)} />
                            })
                        }
                    </Menu>
                </Grid.Column>
                <Grid.Column width={12}>
                    <div id="interests-header"><h1>Interests</h1>
                        <p>Keep your interests up to date so we can keep giving awesome recommendations.</p>
                    </div>
                    <Card.Group>
                        {
                            subCategories.length > 0 && subCategories.map((subCategory) => {
                                return (
                                    <Card key={subCategory.id} color={userInterest(subCategory)} >
                                        <Card.Content>
                                            <Card.Header>{subCategory.name}</Card.Header>
                                            <Button positive compact value="like" onClick={(evt) => this.props.handleIntUpdate(evt, subCategory, userInterest(subCategory), user)} >
                                                <Icon name="thumbs up" />
                                            </Button>
                                            <Button negative compact value="dislike" onClick={(evt) => this.props.handleIntUpdate(evt, subCategory, userInterest(subCategory), user)} ><Icon name="thumbs down" /></Button>
                                        </Card.Content>
                                    </Card>
                                )
                            })

                        }
                    </Card.Group>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapState = (state) => {
    return {
        user: state.user,
        categories: state.categories,
        subCategories: state.subCategories,
        userSubCategories: state.userSubCategories
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
        },
        loadInitialData(id) {
            dispatch(fetchCategories())
            dispatch(fetchSubCategories())
            dispatch(fetchUserSubCategories(id))
        }
    }
}


const Container = connect(mapState, mapDispatch)(UserInterests)

export default Container