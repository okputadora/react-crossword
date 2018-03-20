import React, { Component } from 'react';
import './App.css';
import Cell from './Cell'
class App extends Component {
  constructor(){
    super()
    this.width = 15;
    this.state = {
      board: ['_','_','_','_','_','#','_','_','_','#']
    }
  }

  render() {
    var cells = this.state.board.map((cell, i) => {
      return (<Cell value={cell} />)
    })
    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
          <div className="grid d-flex flex-row">
            {cells}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
