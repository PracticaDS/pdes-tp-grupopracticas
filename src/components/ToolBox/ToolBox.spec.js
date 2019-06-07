import React from 'react'
import { shallow } from 'enzyme'
import ToolBox from './ToolBox'

describe('ToolBox', () => {

  it('should render correctly whithout props', () => {
    const component = shallow(<ToolBox />)
    expect(component).toMatchSnapshot()
  })
  
})