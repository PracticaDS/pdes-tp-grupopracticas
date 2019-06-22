import React from 'react'
import { shallow } from 'enzyme'
import { Cell } from './Cell'

const clickFn = jest.fn();

describe('ToolBox', () => {

  it('should render correctly whithout props', () => {
    const component = shallow(<Cell />)
    expect(component).toMatchSnapshot()
  })

  it('should has class selected', () => {
    const component = shallow(<Cell selected={true}/> )
    expect(component.hasClass('selected')).toEqual(true)
  })

  it('should not has class selected', () => {
    const component = shallow(<Cell selected={false}/> )
    expect(component.hasClass('selected')).toEqual(false)
  })
  
})