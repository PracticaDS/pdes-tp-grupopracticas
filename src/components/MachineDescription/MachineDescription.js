import React, { Component } from 'react'
import './MachineDescription.css'

import { connect } from 'react-redux';


export class MachineDescription extends Component {

    getName = () => {
        const machine = this.props.selectedMachine 
        return machine && machine.name ? machine.name.charAt(0).toUpperCase() + machine.name.slice(1) : ''
    }

    getPrice = () => {
        const machine = this.props.selectedMachine 
        return machine && machine.price ? `$${machine.price}` : ''
    }

    render() {
        return (
            <div className="MachineDescription">
                <h3>Descripción</h3>
                <div className="description">
                    <p>Name:<span>{this.getName()}</span></p>
                    <p>Precio:<span>{this.getPrice()}</span></p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedMachine: state.machineSelected.machine,
})

export default connect(mapStateToProps, null)(MachineDescription)
