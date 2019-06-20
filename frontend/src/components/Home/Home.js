import React, { Component } from 'react'
import { Card, Table, Container, Button, Icon } from 'semantic-ui-react'
import './Home.css'
import { connect } from 'react-redux';

export class Home extends Component {

    create = () => {
        this.props.history.push("/factory")
    }

    play = () => {
        this.props.history.push("/factory")
    }

    delete = () => {
        
    }

    componentWillMount() {
        if(! this.props.user) {
            this.redirectToLogin()
        }
    }

    redirectToLogin = () => {
        this.props.history.push("/")
    }

    render() {
        return (
            <Container className="Home ui two column centered grid">
                <Card className="fluid column">
                    <Card.Content>
                        <Card.Header>
                            Hola {this.props.user.username}! Estas son tus fabricas.
                            <Button floated='right' onClick={this.create}>Crear</Button>
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                    <Table celled inverted selectable>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nombre</Table.HeaderCell>
                            <Table.HeaderCell>Fecha guardada</Table.HeaderCell>
                            <Table.HeaderCell>Cantidad de máquinas</Table.HeaderCell>
                            <Table.HeaderCell>Acciones</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        <Table.Row>
                            <Table.Cell>Primera</Table.Cell>
                            <Table.Cell>25/12/2018</Table.Cell>
                            <Table.Cell >3</Table.Cell>
                            <Table.Cell >
                                <Button.Group icon>
                                    <Button onClick={this.play}>
                                    <Icon name='play' />
                                    </Button>
                                    <Button onClick={this.delete}>
                                    <Icon name='trash' />
                                    </Button>
                                </Button.Group>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Segunda</Table.Cell>
                            <Table.Cell>25/12/2018</Table.Cell>
                            <Table.Cell >32</Table.Cell>
                            <Table.Cell >
                                <Button.Group icon>
                                    <Button onClick={this.play}>
                                        <Icon name='play' />
                                    </Button>
                                    <Button onClick={this.delete}>
                                        <Icon name='trash' />
                                    </Button>
                                </Button.Group>
                            </Table.Cell>
                        </Table.Row>
                        </Table.Body>
                    </Table>
                    </Card.Content>
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    user: state.game.user,
    factories: state.game.factories
})

const actions = { 
    
}
  
  export default connect(mapStateToProps, null)(Home)
