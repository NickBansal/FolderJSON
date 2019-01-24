import '../setupTest'
import React from 'react'
import App from '../App'
import SortButton from '../Components/SortButtons'
import FilterForm from '../Components/FilterForm'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('<App />', () => {
  
    it('Component matches the snapshot', () => {
        const wrapper = shallow(<App />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('Changes the folderItemElement and toggleInformation in state on click handler', () => {
        const wrapper = shallow(<App />)
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
        const wrapper = shallow(<App />)
        const props = { handleSubmit: filter => {
            wrapper.setState({
                filter
            })
        }};
        const filterWrapper = shallow(<FilterForm {...props}/>)

        filterWrapper.find('input').simulate('change', { target: { value: 'Helo' }})

        // wrapper.instance().handleSubmit('filter')
        expect(wrapper.state().filter).toBe('')
        // wrapper.instance().handleSubmit('random')
        // expect(wrapper.state().filter).toBe('random')
    })
    
    it.only('Changes the state with the sortFolder instance', () => {
        const wrapper = shallow(<App />)
        const props = { sortFolders: value => {
            const newReverse = value !== wrapper.state().sortValue ? false : !wrapper.state().columnReverse
            wrapper.setState({
                sortValue: value,
                columnReverse: newReverse
            })
        }};
        const buttonWrapper = shallow(<SortButton {...props}/>)

        buttonWrapper.find('button').first().simulate('click');
        expect(wrapper.state().sortValue).toBe('name')
        expect(wrapper.state().toggleInformation).toBe(false)
        expect(wrapper.state().columnReverse).toBe(false)

        buttonWrapper.find('button').at(1).simulate('click');
        expect(wrapper.state().sortValue).toBe('added')
        expect(wrapper.state().columnReverse).toBe(false)

        buttonWrapper.find('button').last().simulate('click');
        expect(wrapper.state().sortValue).toBe('size')
        expect(wrapper.state().columnReverse).toBe(false)

        buttonWrapper.find('button').last().simulate('click');
        expect(wrapper.state().columnReverse).toBe(true)

        buttonWrapper.find('button').last().simulate('click');
        expect(wrapper.state().columnReverse).toBe(false)
    })
})