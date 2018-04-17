import React, { Component } from 'react';
import './App.css';
import Cell from './Cell'
class App extends Component {
  state = {
    board: "___#____#_____",
    currentSquare: 0,
    currentWord: [],
    directionAcross: true
  }
  findCurrentWord = (id) => {
    const currentWord = [id]
    let searchForEnd = true;
    let searchForBeg = true;
    let nextId = id;
    let prevId = id;
    if (this.state.directionAcross){
      while (searchForEnd || searchForBeg){
        nextId++;
        prevId--;
        // check if the next box is in the word
        if (this.state.board[nextId] === "_" && searchForEnd){
          currentWord.push(nextId)
        }
        else searchForEnd = false
        // check if the previous box is in the word
        if (this.state.board[prevId] === "_" && searchForBeg){
          currentWord.unshift(prevId)
        }
        else searchForBeg = false;
      }
      this.setState({
        currentWord: currentWord
      })
    }
  }

  changeCurrentSquare = (event) => {
    console.log("click")
    // this is the current square
    this.findCurrentWord(event.target.id)
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
      // highlight current word
      if (this.state.currentWord.indexOf(index) !== -1){
        color = "lightblue"
      }

      // highlight current box
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
