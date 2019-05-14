import React, { Component } from 'react'
import './EditionButton.css'
import { connect } from 'react-redux'
import { clearCell } from '../../actions/cellsAction'


class EditionButton extends Component {


    triggerSelectButtonAction = () => {
        if(this.props.selectedCelda) {
            this.clearCell(this.props.selectedCelda)
        }
    }

    clearCell = (cellId) => this.props.clearCell(cellId)

    render() {
        if (this.props.selected && this.props.nombre === this.props.machine.nombre){
            return <div className="EditionButton seleccionado" >
                    <img src={this.props.src} alt="actions" />
                    </div>;
        } else {
            return <div className="EditionButton" onClick={this.triggerSelectButtonAction} >
                    <img src={this.props.src} alt="actions"/>
                    </div>;	
        }
    }
  
}

const mapStateToProps = state => ({
    selectedCelda: state.selectedCelda.celda,
})

export default connect(mapStateToProps, { clearCell })(EditionButton)