import React from 'react'
import { shallow } from 'enzyme'
import { MachineDescription } from './MachineDescription'

describe('ToolBox', () => {

  it('should render correctly whithout props', () => {
    const component = shallow(<MachineDescription />)
    expect(component).toMatchSnapshot()
  })
  
})