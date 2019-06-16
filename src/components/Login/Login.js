import React, { Component } from 'react'
import './Login.css'
import { Form, Container } from 'semantic-ui-react'


export default class Login extends Component {

    state = { name: '', email: '', submittedName: '', submittedEmail: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, email } = this.state
        this.setState({ submittedName: name, submittedEmail: email })
        this.redirectToHome()
    }

    redirectToHome = () => {
        this.props.history.push("/home")
    }

    render() {
        return (
            <div className="Login ui two column centered grid">
                <Container className="column" textAlign="center">
                    <Form onSubmit={this.handleSubmit}>
                        <h3>Ingresar usuario</h3>
                        <Form.Group>
                            <Form.Input width={14} placeholder='Usuario' 
                                name='name' 
                                value={this.state.name} 
                                onChange={this.handleChange} />
                            <Form.Button content='Entrar' width={2} />
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}
