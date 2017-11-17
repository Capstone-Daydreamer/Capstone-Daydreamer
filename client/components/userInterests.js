import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card } from 'semantic-ui-react'
import {removeInterest, addInterest, destroyInterest} from '../store'

export class UserInterests extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: '',
            activeItemId: -1,
        }
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick = (e, cat) => {
        this.setState({ activeItem: cat.name, activeItemId: cat.id })
    }

    render(){ 
        const user = this.props.user
        const userCategories = user.id && user.subCategories.map((subCategory) => {
            return subCategory.id
        })
        const activeItem = this.state.activeItem
        const categories = this.props.categories
        const subCategories = this.props.subCategories.length > 0 && this.props.subCategories.filter((subCategory)=> {
            if (this.state.activeItemId === -1) {
                return subCategory
            } return subCategory.categories[0].id === this.state.activeItemId
        })
        const userInterest = (subCategory) => {
            if (userCategories.indexOf(subCategory.id) !== -1){
                return 'green'
            }
            return 'red'
        }
        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu pointing secondary vertical>
                    <Menu.Item name="All" active={activeItem === "All"} onClick={(evt) => this.handleItemClick(evt, {name: name, id: -1})} />
                        {
                            categories && categories.map((category) => {
                                return <Menu.Item key={category.id} name={category.name} active={activeItem === category.name} onClick={(evt) => this.handleItemClick(evt, category)} />
                            })
                        }
                    </Menu>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Card.Group>
                        {
                            subCategories.length > 0 && subCategories.map((subCategory) => {
                                return (
                                    <Card key={subCategory.id} color={userInterest(subCategory)} onClick={(evt) => this.props.handleIntUpdate(evt, subCategory, userInterest(subCategory), user)}>
                                        <Card.Content>
                                            <Card.Header>{subCategory.name}</Card.Header>
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
        subCategories: state.subCategories
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        handlePromote(event, id) {
            const thunk = adminUser(id, ownProps.history);
            dispatch(thunk);
        },
        handleIntUpdate(e, cat, color, user) {
            if (color === 'red'){
                dispatch(addInterest(user.id, cat.id))
            } else {
                dispatch(destroyInterest(user.id, cat.id))
            }
        }
    }
}

const Container = connect(mapState, mapDispatch)(UserInterests)

export default Container
