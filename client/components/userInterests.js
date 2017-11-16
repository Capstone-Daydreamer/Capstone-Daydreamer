import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu, Grid, Card } from 'semantic-ui-react'

export class UserInterests extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: ''
        }
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){ 
        const activeItem = this.state.activeItem
        const categories = this.props.categories
        const subCategories = this.props.subCategories
        console.log(categories)
        return (
            <Grid>
                <Grid.Column width={4}>
                    <Menu pointing secondary vertical>
                        {
                            categories && categories.map((category) => {
                                return <Menu.Item key={category.id} name={category.name} active={activeItem === category.name} onClick={this.handleItemClick} />
                            })
                        }
                    </Menu>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Card.Group>
                        {
                            subCategories.length > 0 && subCategories.map((subCategory) => {
                                return (
                                    <Card>
                                        <Card.Content key={subCategory.id}>
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

const mapDispatch = null

const Container = connect(mapState, mapDispatch)(UserInterests)

export default Container
