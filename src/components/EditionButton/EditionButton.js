import React, { Component } from 'react'
import './EditionButton.css'
import { connect } from 'react-redux'
import { clearCell, rotateMachine } from '../../actions/cellsAction'
import { unselectCelda } from '../../actions/editionButtonAction'
import { DELETE, MOVE, ROTATE } from '../../utils/EditionTypes'


class EditionButton extends Component {


    onClick = () => {
        if(this.props.selectedCelda) {
            switch(this.props.type) {
                case DELETE:
                    this.props.clearCell(this.props.selectedCelda)
                    this.props.unselectCelda()
                    break
                case ROTATE:
                    this.props.rotateMachine(this.props.selectedCelda)
                    this.props.unselectCelda()
                    break
                default:
                    this.props.unselectCelda()
            }
        }
    }

    clearCell = (cellId) => this.props.clearCell(cellId)

    render() {
        if (this.props.selected && this.props.nombre === this.props.machine.nombre){
            return <div className="EditionButton seleccionado" >
                    <img src={this.props.src} alt="actions" />
                    </div>;
        } else {
            return <div className="EditionButton" onClick={this.onClick} >
                    <img src={this.props.src} alt="actions"/>
                    </div>;	
        }
    }
  
}

const mapStateToProps = state => ({
    selectedCelda: state.selectedCelda.celda,
})

const actions = {
    clearCell,
    unselectCelda,
    rotateMachine
}

export default connect(mapStateToProps, actions)(EditionButton)