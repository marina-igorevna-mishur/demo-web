import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
    let component

    beforeEach(() => {
        component = shallow(<App />)
    })

    afterEach(() => {
        component.unmount()
    })

    it('should render content div', () => {
        expect(component.find('#content')).toHaveLength(1)
    })

    it('should render correct content', () => {
        expect(component.find('#content').text()).toBe('Hello world')
    })
})
