import React, { Component } from 'react'
import './App.css'
import FoldersOrFiles from './Components/Folders'
import SortButtons from './Components/SortButtons'
import FilterForm from './Components/FilterForm'

class App extends Component {

  state = {
    folderItemElement: 0,
    toggleInformation: false,
    sortValue: '',
    columnReverse: false,
    filter: ''
  }

  render() {
    const { folderItemElement, toggleInformation, sortValue, columnReverse, filter } = this.state
    return (
      <div className='App'>
        <SortButtons 
        sortFolders={this.sortFolders}/>
        <FilterForm 
        handleChange={this.handleChange}/>
        <FoldersOrFiles
        filter={filter}
        columnReverse={columnReverse}
        sortValue={sortValue} 
        folderItemElement={folderItemElement}
        toggleInformation={toggleInformation}
        handleClick={this.handleClick}/>
      </div>
    )
  }

  handleClick = index => {
    const { toggleInformation, folderItemElement } = this.state
    const toggle = index !== folderItemElement  ? true : !toggleInformation
    this.setState({
      folderItemElement: index,
      toggleInformation: toggle
    })
  }

  handleChange = filter => {
    this.setState({
      filter
    })
  }

  sortFolders = value => {
    const { sortValue, columnReverse } = this.state
    const newReverse = value !== sortValue ? false : !columnReverse
    this.setState({
      sortValue: value,
      columnReverse: newReverse,
      toggleInformation: false
    })
  }

}

export default App
