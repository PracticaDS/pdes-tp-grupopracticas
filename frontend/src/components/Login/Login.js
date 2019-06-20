import React, { Component } from 'react'
import './Login.css'
import { Form, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginUser, loadFactories } from '../../actions/gameActions'

export class Login extends Component {

    state = { name: '', email: '', submittedName: '', submittedEmail: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { name, email } = this.state
        // this.setState({ submittedName: name, submittedEmail: email })
        
        fetch(`api/user/${name}`)
            .then(response => response.json())
            .then(data => { 
                const user = data.content
                if(user) {
                    this.loginUser(user)
                    this.searchFactories(user._id)
                } else {
                    // crear nuevo usuario
                }
            })
    }

    loginUser(user) {
        this.props.loginUser({username: user.username, id: user._id})
    }

    searchFactories(userId) {
        console.log(userId)
        fetch(`api/factories/${userId}`)
            .then(response => response.json())
            .then(data => { 
                const factories = data.content
                if(factories) {
                    this.props.loadFactories(data.content)
                    this.redirectToHome()
                }
            })
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

  
const actions = { 
    loginUser,
    loadFactories
}
  
export default connect(null, actions)(Login)
