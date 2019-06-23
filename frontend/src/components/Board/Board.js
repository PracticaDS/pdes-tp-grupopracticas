import React, { Component } from 'react'
import Cell from '../Cell/Cell'
import './Board.css'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'


export class Board extends Component {

  state = { 
    loading: false,
    showError: false
  }

  newCell(cell) {
    return <Cell key={cell.id} id={cell.id} machine={cell.machine} selected={cell.selected} />
  }

  createCells() {
      return this.props.cells.map(this.newCell)
  }

  saveFactory = () => {
    this.setState({loading:true})
    console.log(this.props.currentFactory)
    const factory = {
        id: this.props.currentFactory._id,
        name: this.props.currentFactory.name,
        //autoSave: this.state,
        cells: this.props.cells
    }
    console.log(factory)
    fetch('api/factory', {
      method:'put',
      headers: {'Content-Type':'application/json'}, 
      body: JSON.stringify(factory)
    })
    .then(response => response.json())
    .then(data => { 
        this.setState({loading:false})
    })
    .catch(err => {
        this.setState({loading:false, showError:true})
    })
  }
  
  render() {
    return (
      <div className="Board">
        {this.createCells()}
        <Button icon='save' onClick={this.saveFactory} loading={this.state.loading}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cells: state.cells,
  user: state.game.user,
  currentFactory: state.game.currentFactory
})

export default connect(mapStateToProps, null)(Board)

