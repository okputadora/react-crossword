import React, { Component } from 'react';
import './App.css';
import Cell from './Cell'
class App extends Component {
  state = {
    board: "___#____#_____",
    currentSquare: "",
    currentWord: []
  }

  changeCurrentSquare = (event) => {
    console.log(event.target.id)
  }
  render() {
    const rows = this.state.board.split("").map((value, index) => {
      const color = value === "_" ? "white" : "black"
      return (
        <Cell
          color={color}
          id={index}
          click={(event) => this.changeCurrentSquare(event)}
        />
      )
    })
    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
          <div className="grid d-flex flex-column">
            {rows}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
