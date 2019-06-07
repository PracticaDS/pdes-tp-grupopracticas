import React from 'react'
import { shallow } from 'enzyme'
import { Board } from './Board'

describe('ToolBox', () => {

  it('should render correctly whithout props', () => {
    const createEmptyCells = () => {
      let cells = []
      for (let i = 1; i <= 100; i++) {
          cells.push({
              id: i, 
              machine: undefined
          })
      }
      return cells;
    }
    const component = shallow(<Board cells={createEmptyCells()}/>)
    expect(component).toMatchSnapshot()
  })
  
})