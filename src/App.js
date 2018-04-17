import React, { Component } from 'react';
import './App.css';
import Cell from './Cell'
class App extends Component {
  state = {
    board: "___#____#_____",
    currentSquare: 0,
    currentWord: []
  }

  changeCurrentSquare = (event) => {
    console.log("click")
    // this is the current square
    this.setState({
      currentSquare: parseInt(event.target.id)
    })
  }
  render() {
    const rows = this.state.board.split("").map((value, index) => {
      let color = "black"
      let clickHandler;
      if (value === "_"){
        color = "white";
        clickHandler = (event) => this.changeCurrentSquare(event)
      }
      if (index === this.state.currentSquare){
        color = "#FFE04D"
      }
      return (
        <Cell
          color={color}
          id={index} key={index}
          click={clickHandler}
        />
      )
    })
    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
          <div className="grid d-flex flex-column">
            <div style={{display: "flex"}}>
              {rows}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
