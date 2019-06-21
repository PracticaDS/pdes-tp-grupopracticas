import React, { Component } from 'react'
import { Card, Table, Container, Button, Icon } from 'semantic-ui-react'
import './Home.css'
import { connect } from 'react-redux'
import moment from 'moment'


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

    loadFactories = () => {
        console.log(this.props.factories)
        if(this.props.factories && this.props.factories.length > 0) {
            return (
                <Table celled inverted selectable>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Creación</Table.HeaderCell>
                        <Table.HeaderCell>Última modificación</Table.HeaderCell>
                        <Table.HeaderCell>Cantidad de máquinas</Table.HeaderCell>
                        <Table.HeaderCell>Acciones</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.props.factories.map(this.createRow)}
                    </Table.Body>
                </Table> 
            )
        } else {
            return <p>Todavía no tiene partidas creadas.</p>
        }
    }

    createRow = (factorie) => {
        return (
            <Table.Row key={factorie._id}>
                <Table.Cell>{factorie.name}</Table.Cell>
                <Table.Cell>{this.formatDate(factorie.created)}</Table.Cell>
                <Table.Cell>{this.formatDate(factorie.updated)}</Table.Cell>
                <Table.Cell >{factorie.cant_machines}</Table.Cell>
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
        )
    }

    formatDate(date) {
        return moment(date).format('DD/MM/YYYY HH:mm')
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
                    {this.loadFactories()}
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
