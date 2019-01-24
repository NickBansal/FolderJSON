import '../setupTest'
import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('<App />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it('Component matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('Changes the folderItemElement and toggleInformation in state on click handler', () => {
        wrapper.instance().handleClick(0)
        expect(wrapper.state().folderItemElement).toBe(0)
        expect(wrapper.state().toggleInformation).toBe(true)
        wrapper.instance().handleClick(1)
        expect(wrapper.state().folderItemElement).toBe(1)
        expect(wrapper.state().toggleInformation).toBe(true)
        wrapper.instance().handleClick(1)
        expect(wrapper.state().toggleInformation).toBe(false)
        wrapper.instance().handleClick(2)
        expect(wrapper.state().folderItemElement).toBe(2)
    })
    it('Changes the state with the handleSubmit instance', () => {
        wrapper.instance().handleSubmit('filter')
        expect(wrapper.state().filter).toBe('filter')
        wrapper.instance().handleSubmit('random')
        expect(wrapper.state().filter).toBe('random')
    })
    it('Changes the state with the sortFolder instance', () => {
        wrapper.instance().sortFolders('name')
        expect(wrapper.state().sortValue).toBe('name')
        expect(wrapper.state().toggleInformation).toBe(false)
        expect(wrapper.state().columnReverse).toBe(false)
        wrapper.instance().sortFolders('name')
        expect(wrapper.state().columnReverse).toBe(true)
    })
})