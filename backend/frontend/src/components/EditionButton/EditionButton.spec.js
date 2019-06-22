import React from 'react'
import { shallow } from 'enzyme'
import { EditionButton } from './EditionButton'

describe('ToolBox', () => {

  it('should render correctly whithout props', () => {
    const component = shallow(<EditionButton />)
    expect(component).toMatchSnapshot()
  })
  
})