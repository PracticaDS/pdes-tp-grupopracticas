import React from 'react'
import { shallow } from 'enzyme'
import { ButtonToolBox } from './ButtonToolBox'

const clickFn = jest.fn();

describe('ButtonToolBox', () => {

  it('should render correctly whithout props', () => {
    const component = shallow(<ButtonToolBox />)
    expect(component).toMatchSnapshot()
  })

  it('should render correctly whith props', () => {
    const component = shallow(<ButtonToolBox 
      seleccionado={false}
      nombre='machine' 
      src='src_img' 
    /> )
    expect(component).toMatchSnapshot()
  })

  it('function should not be call on click', () => {
    const component = shallow(<ButtonToolBox 
      selected={true}
      nombre='machine' 
      src='src_img' 
      machine={ {nombre:'machine' } }
      selectMachine={clickFn}
    /> )

    component.simulate('click')
    expect(clickFn).not.toHaveBeenCalled()
  })

  it('function should be call on click', () => {
    const component = shallow(<ButtonToolBox 
      selected={false}
      nombre='machine' 
      src='src_img' 
      machine={ {nombre:'machine' } }
      selectMachine={clickFn}
    /> )

    component.simulate('click')
    expect(clickFn).toHaveBeenCalled()
  })
  
})