import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import App from './App'
import content from 'services/content'

describe('<App />', () => {
    let component
    let getAppContentStub

    beforeEach(() => {
        getAppContentStub = sinon.stub(content, 'getAppContent').returns('mock content')
        component = shallow(<App />)
    })

    afterEach(() => {
        getAppContentStub.restore()
        component.unmount()
    })

    it('should render content div', () => {
        expect(component.find('#content')).toHaveLength(1)
    })

    it('should render correct content', () => {
        expect(component.find('#content').text()).toBe('mock content')
    })
})
