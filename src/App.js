import React, { Component } from 'react';
import './App.css';
import Folders from './Components/Folders'

class App extends Component {

  state = {
    folderItemElement: 0,
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
    this.setState({
      folderItemElement: index,
      toggleInformation: !this.state.toggleInformation
    })
  }

}

export default App;
