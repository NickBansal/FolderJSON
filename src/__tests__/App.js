import '../setupTest'
import React from 'react'
import App from '../App'
import SortButton from '../Components/SortButtons'
// import FilterForm from '../Components/FilterForm'
import FoldersOrFiles from '../Components/Folders'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('<App />', () => {

    it('Component matches the snapshot', () => {
        const wrapper = shallow(<App />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('Changes the folderItemElement and toggleInformation in state on click handler', () => {
        const wrapper = shallow(<App />)
        const props = {
            filter: '',
            columnReverse: null,
            sortValue: null,
            folderItemElement: wrapper.state().folderItemElement,
            toggleInformation: wrapper.state().toggleInformation,
            handleClick: index => {
                const toggle = index !== wrapper.state().folderItemElement ? true : !wrapper.state().toggleInformation
                wrapper.setState({
                    folderItemElement: index,
                    toggleInformation: toggle
                })
            }
        }
        const folderWrapper = shallow(<FoldersOrFiles {...props} />)
        
        folderWrapper.find('i').first().simulate('click');
        expect(wrapper.state().folderItemElement).toBe(2)
        expect(wrapper.state().toggleInformation).toBe(true)

        folderWrapper.find('i').last().simulate('click');
        expect(wrapper.state().folderItemElement).toBe(4)
        expect(wrapper.state().toggleInformation).toBe(true)

        folderWrapper.find('i').last().simulate('click');
        expect(wrapper.state().folderItemElement).toBe(4)
        expect(wrapper.state().toggleInformation).toBe(false)
    })

    it('Changes the state with the handleSubmit instance', () => {
        const wrapper = shallow(<App />)
        // const props = { handleSubmit: filter => {
        //     wrapper.setState({
        //         filter
        //     })
        // }};
        // const filterWrapper = shallow(<FilterForm {...props}/>)
        // filterWrapper.find('input').simulate('change', { target: { value: 'Hello' }})

        wrapper.instance().handleSubmit('filter')
        expect(wrapper.state().filter).toBe('filter')
        wrapper.instance().handleSubmit('random')
        expect(wrapper.state().filter).toBe('random')
    })

    it('Changes the state with the sortFolder instance', () => {
        const wrapper = shallow(<App />)
        const props = {
            sortFolders: value => {
                const newReverse = value !== wrapper.state().sortValue ? false : !wrapper.state().columnReverse
                wrapper.setState({
                    sortValue: value,
                    columnReverse: newReverse
                })
            }
        };
        const buttonWrapper = shallow(<SortButton {...props} />)

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