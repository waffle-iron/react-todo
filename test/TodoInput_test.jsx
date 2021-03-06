import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'

import TodoInput from '../src/components/TodoInput'

describe('TodoInput', () => {
  it('render', () => {
    const wrapper = shallow(<TodoInput />)
    expect(wrapper.find('form')).to.have.length(1)
    expect(wrapper.find('form input')).to.have.length(1)
  })

  it('onCommit', () => {
    const onCommit = sinon.spy()
    const wrapper = shallow(<TodoInput onCommit={onCommit} />)
    wrapper.find('form').simulate('submit', {
      preventDefault() {},
      target: { elements: { todo: { value: ' a ' } } }
    })
    expect(onCommit).to.have.property('callCount', 1)
    expect(onCommit).to.have.property('args').that.deep.equals([[{ value: 'a' }]])
  })
})
