import React, { Component } from 'react'
import './App.css'
import FoldersOrFiles from './Components/Folders'
import SortButtons from './Components/SortButtons'

class App extends Component {

  state = {
    element: 0,
    toggleInformation: false,
    sortValue: ''
  }

  render() {
    const { folderItemElement, toggleInformation, sortValue } = this.state
    return (
      <div className="App">
        <SortButtons 
        sortFolders={this.sortFolders}/>
        <FoldersOrFiles
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
    this.setState({
      sortValue: value
    })
  }

}

export default App;
