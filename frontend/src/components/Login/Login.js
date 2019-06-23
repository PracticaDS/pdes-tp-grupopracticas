import React, { Component } from 'react'
import './Login.css'
import { Form, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginUser, loadFactories } from '../../actions/gameActions'

export class Login extends Component {

    state = { 
        name: '', 
        email: '', 
        submittedName: '', 
        submittedEmail: '', 
        loading: false 
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        this.setState({loading:true})
        const { name } = this.state
        fetch(`api/user/${name}`)
            .then(response => response.json())
            .then(data => { 
                const user = data.content
                if(user) {
                    this.loginUser(user)
                    this.searchFactories(user._id)
                } else {
                    this.createUser(name)
                }
            })
    }

    createUser(username) {
        fetch('api/user', {
            method: 'POST',
            body: JSON.stringify({username: username}),
            headers:{ 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(data => {
                const user = data.content
                console.log('Success:', user)
                this.loginUser(user)
                this.redirectToHome()
            })
    }

    loginUser(user) {
        this.props.loginUser({username: user.username, id: user._id})
    }

    searchFactories(userId) {
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
                    <Form onSubmit={this.handleSubmit} >
                        <h3>Ingresar usuario</h3>
                        <Form.Group>
                            <Form.Input width={14} placeholder='Usuario' 
                                name='name' 
                                value={this.state.name} 
                                onChange={this.handleChange} 
                                required/>
                            <Form.Button content='Entrar' width={2} loading={this.state.loading} />
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
