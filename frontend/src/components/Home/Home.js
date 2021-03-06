import React, { Component } from 'react'
import { Card, Table, Container, Button, Icon, Modal, Form, Message } from 'semantic-ui-react'
import './Home.css'
import { connect } from 'react-redux'
import moment from 'moment'
import { loadFactory } from '../../actions/cellsAction'
import { currentFactory, loadFactories } from '../../actions/gameActions'
import { createEmptyCells } from '../../utils/FactoryUtils'


export class Home extends Component {

    state = { 
        open: false, 
        factoryName: '', 
        dificulty: 0, 
        autoSave: true, 
        loading: false,
        loadingPlay: false,
        showError: false
    }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    create = () => {
        this.props.history.push("/factory")
    }

    play(factory){
        this.setState({loadingPlay:true})
        fetch(`api/factory/${factory._id}`)
        .then(response => response.json())
        .then(data => { 
            if(data.content) {
                this.props.loadFactory(data.content)
                this.props.currentFactory(data.content)
                this.setState({loadingPlay:false})
                this.redirectToFactory()
            }
        })
        .catch(err => {
            this.setState({loadingPlay:true})
        })
    }

    delete(factory){
        fetch(`api/factory/${factory._id}`, {
            method:'delete',
            headers: {'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(data => { 
            if(data.content) {
                this.searchFactories(this.props.user.id)
            }
        })
        .catch(err => {
            this.setState({loading:false, showError:true})
        })
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

    createRow = (factory) => {
        return (
            <Table.Row key={factory._id}>
                <Table.Cell>{factory.name}</Table.Cell>
                <Table.Cell>{this.formatDate(factory.created)}</Table.Cell>
                <Table.Cell>{this.formatDate(factory.updated)}</Table.Cell>
                <Table.Cell >{factory.cant_machines}</Table.Cell>
                <Table.Cell >
                    <Button.Group icon>
                        <Button onClick={this.play.bind(this, factory)} loading={this.props.loadingPlay}>
                        <Icon name='play' />
                        </Button>
                        <Button onClick={this.delete.bind(this, factory)}>
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
                    this.props.currentFactory(data.content)
                    this.redirectToFactory()
                }
            })
            .catch(err => {
                this.setState({loading:false, showError:true})
            })
    }

    searchFactories(userId) {
        fetch(`api/factories/${userId}`)
            .then(response => response.json())
            .then(data => { 
                const factories = data.content
                if(factories) {
                    this.props.loadFactories(data.content)
                }
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
    loadFactory,
    loadFactories,
    currentFactory
}

const mapStateToProps = state => ({
    user: state.game.user,
    factories: state.game.factories
})
  
export default connect(mapStateToProps, actions)(Home)
