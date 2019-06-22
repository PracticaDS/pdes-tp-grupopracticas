import React from 'react'
import { shallow } from 'enzyme'
import Fabrica from './Fabrica'

describe('Fabrica', () => {

  it('should render correctly whithout props', () => {
    const component = shallow(<Fabrica />)
    expect(component).toMatchSnapshot()
  })
  
})