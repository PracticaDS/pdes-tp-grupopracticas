import React, { Component } from 'react';
import '../css/Celda.css';
import { connect } from 'react-redux';
import { unselectMachine } from '../actions/toolboxAction'


class Celda extends Component{

    constructor(props){
        super (props);
        this.state = {
            machine: ''
        }
    }

    addMachine = () => {
        if(this.props.machine){
            this.setState({machine: this.props.machine})
            this.props.unselectMachine()
        }
    }

    render () {
        return (
            <div className="celda" onClick={this.addMachine}>
                { this.state.machine ? <img src={this.state.machine.img} alt="actions"/> : null }
            </div>   
        )
    }

}

const mapStateToProps = state => ({
    machine: state.machineSelected.machine
})
  
export default connect(mapStateToProps, { unselectMachine })(Celda)