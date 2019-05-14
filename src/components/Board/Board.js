import React, { Component } from 'react'
import Cell from '../Cell/Cell'
import './Board.css'
import { connect } from 'react-redux'


class Board extends Component {

  newCell(cell) {
    return <Cell key={cell.id} id={cell.id} machine={cell.machine} />
  }

  createCells() {
      return this.props.cells.map(this.newCell)
  }
  
  render() {
    return (
      <div className="Board">
        {this.createCells()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cells: state.cells
})

export default connect(mapStateToProps, null)(Board)

