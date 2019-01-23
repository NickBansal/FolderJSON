import React, { Component } from 'react';
import './App.css';
import Folders from './Components/Folders'

class App extends Component {

  state = {
    element: 0,
    toggleInformation: false
  }

  render() {
    const { folderItemElement, toggleInformation } = this.state
    return (
      <div className="App">
        <Folders 
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

}

export default App;
