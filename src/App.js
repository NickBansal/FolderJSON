import React, { Component } from 'react'
import './App.css'
import FoldersOrFiles from './Components/Folders'
import SortButtons from './Components/SortButtons'
import FilterForm from './Components/FilterForm'

class App extends Component {

  state = {
    element: 0,
    toggleInformation: false,
    sortValue: '',
    columnReverse: false
  }

  render() {
    const { folderItemElement, toggleInformation, sortValue, columnReverse } = this.state
    return (
      <div className="App">
        <SortButtons 
        sortFolders={this.sortFolders}/>
        <FilterForm />
        <FoldersOrFiles
        columnReverse={columnReverse}
        sortValue={sortValue} 
        folderItemElement={folderItemElement}
        toggleInformation={toggleInformation}
        handleClick={this.handleClick}/>
      </div>
    );
  }

  handleClick = index => {
    const { toggleInformation, folderItemElement } = this.state
    const toggle = index !== folderItemElement  ? true : !toggleInformation
    this.setState({
      folderItemElement: index,
      toggleInformation: toggle
    })
  }

  sortFolders = value => {
    const { sortValue, columnReverse } = this.state
    const newReverse = value !== sortValue ? false : !columnReverse
    this.setState({
      sortValue: value,
      columnReverse: newReverse
    })
  }

}

export default App;
