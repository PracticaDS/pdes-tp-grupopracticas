import React, { Component } from 'react'
import { Card, Table, Container, Button, Icon, Modal, Form, Message } from 'semantic-ui-react'
import './Home.css'
import { connect } from 'react-redux'
import moment from 'moment'
import { loadFactory } from '../../actions/cellsAction'
import { createEmptyCells } from '../../utils/FactoryUtils'

export class Home extends Component {

    state = { 
        open: false, 
        factoryName: '', 
        dificulty: 0, 
        autoSave: true, 
        loading: false,
        showError: false
    }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

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
            return <p>No tienes fábricas creadas. Crea una para empezar a jugar!</p>
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

    createFactory = () => {
        this.setState({loading:true})
        const factory = {
            user_id: this.props.user.id,
            name: this.state.factoryName,
            autoSave: this.state,
            cells: createEmptyCells()
        }

        fetch('api/factory', {
                method:'post',
                headers: {'Content-Type':'application/json'}, 
                body: JSON.stringify(factory)
            })
            .then(response => response.json())
            .then(data => { 
                if(data.content) {
                    this.props.loadFactory(data.content)
                    this.redirectToFactory()
                }
            })
            .catch(err => {
                console.log(err)
                this.setState({loading:false, showError:true})
            })
    }

    redirectToFactory() {
        this.props.history.push("/factory")
    }

    handleChange = (e, { name, value }) => {
        this.setState({ [name]: value })
    }

    handleChangeCheckbox = () => this.setState(prevState => ({ autoSave: !prevState.autoSave }))

    render() {
        const { open, size } = this.state
        return (
            <Container className="Home ui two column centered grid">
                <Card className="fluid column">
                    <Card.Content>
                        <Card.Header>
                            Hola '{this.props.user.username}'! Estas son tus fábricas.
                            <Button floated='right' onClick={this.show('tiny')}>Crear</Button>
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                    {this.loadFactories()}
                    </Card.Content>
                </Card>
        
                <Modal size={size} open={open} onClose={this.close} closeIcon>
                    <Modal.Header>Crear nueva fábrica</Modal.Header>
                    <Modal.Content>
                    <Form unstackable onSubmit={this.createFactory} loading={this.state.loading} error={this.state.showError}>
                        <Form.Input label='Nombre' 
                            placeholder='fabrica loca' 
                            name='factoryName'
                            value={this.state.factoryName}
                            onChange={this.handleChange}
                            required />
                        <Form.Checkbox label='Autoguardado' 
                            name='autoSave'
                            checked={this.state.autoSave} 
                            onChange={this.handleChangeCheckbox} />
                        
                        <br/>
                        <Message
                            error
                            header='Error creando la fábrica'
                            content='Intenta devuelta.'
                            />
                        <Form.Button type='submit' positive content='Crear'/>
                    </Form>
                    </Modal.Content>
                </Modal>
            </Container>
        )
    }
}

const actions = { 
    loadFactory
}

const mapStateToProps = state => ({
    user: state.game.user,
    factories: state.game.factories
})
  
export default connect(mapStateToProps, actions)(Home)
