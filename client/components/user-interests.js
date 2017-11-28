import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card } from 'semantic-ui-react'
import { fetchCategories, fetchSubCategories, fetchUserSubCategories } from '../store'
import UserInterestCard from './user-interest-card'
import { withRouter } from 'react-router-dom'

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
        const activeItem = this.state.activeItem
        const subCategories = this.props.subCategories.length > 0 && this.props.subCategories.filter((subCategory) => {
            if (this.state.activeItemId === -1) {
                return subCategory
            } return subCategory.categories[0].id === this.state.activeItemId
        })
        
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
                        {subCategories.length > 0 && subCategories.map(subCategory => <UserInterestCard key={subCategory.id} subCategory={subCategory} userSubCategories={userSubCategories} user={user} />)}
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
        loadInitialData(id) {
            dispatch(fetchCategories())
            dispatch(fetchSubCategories())
            dispatch(fetchUserSubCategories(id))
        }
    }
}


export default withRouter(connect(mapState, mapDispatch)(UserInterests))
