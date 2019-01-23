import React, { Component } from 'react'
import './App.css'
import FoldersOrFiles from './Components/Folders'
import SortButtons from './Components/SortButtons'

class App extends Component {

  state = {
    element: 0,
    toggleInformation: false,
    sortValue: '',
    coloumnReverse: false
  }

  render() {
    const { folderItemElement, toggleInformation, sortValue, coloumnReverse } = this.state
    return (
      <div className="App">
        <SortButtons 
        sortFolders={this.sortFolders}/>
        <FoldersOrFiles
        coloumnReverse={coloumnReverse}
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
    const { sortValue, coloumnReverse } = this.state
    const newReverse = value !== sortValue ? false : !coloumnReverse
    this.setState({
      sortValue: value,
      coloumnReverse: newReverse
    })
  }

}

export default App;
