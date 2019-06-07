import React, { Component } from 'react'
import './EditionButton.css'
import { connect } from 'react-redux'
import { clearCell, rotateMachine } from '../../actions/cellsAction'
import { unselectCelda } from '../../actions/editionButtonAction'
import { selectMachine } from '../../actions/toolboxAction'
import { DELETE, ROTATE, MOVE } from '../../utils/EditionTypes'


export class EditionButton extends Component {


    onClick = () => {
        if(this.props.selectedCell) {
            switch(this.props.type) {
                case DELETE:
                    this.props.clearCell(this.props.selectedCell.cellId)
                    this.props.unselectCelda()
                    break
                case ROTATE:
                    this.props.rotateMachine(this.props.selectedCell.cellId)
                    this.props.unselectCelda()
                    break
                case MOVE:
                        this.props.clearCell(this.props.selectedCell.cellId)
                        this.props.selectMachine(this.props.selectedCell.machine)
                        this.props.unselectCelda()
                        break
                default:
                    this.props.unselectCelda()
            }
        }
    }

    clearCell = (cellId) => this.props.clearCell(cellId)

    render() {
        if (this.props.selected && this.props.name === this.props.machine.name){
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
    selectedCell: state.selectedCelda.celda,
})

const actions = {
    clearCell,
    unselectCelda,
    rotateMachine,
    selectMachine
}

export default connect(mapStateToProps, actions)(EditionButton)