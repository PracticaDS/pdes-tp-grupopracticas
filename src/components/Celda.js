import React, { Component } from 'react';
import '../css/Celda.css';
import { connect } from 'react-redux';

class Celda extends Component{

    constructor(props){
        super (props);
        this.state = {
            machine: ''
        }
    }

    agregarMaquina = () => {
        this.setState({machine: this.props.machine})
    }

    includeMachine = () => {
        if(this.props.machine) {
            return 
        } else {
            return 'no hay'
        }
    }

    render () {
        return (
            <div className="celda" onClick={this.agregarMaquina}>
                { this.state.machine ? <img src={this.state.machine.img} alt="actions"/> : null }
            </div>   
        )
    }

}

const mapStateToProps = state => ({
    machine: state.machineSelected.machine
})
  
export default connect(mapStateToProps, { })(Celda)