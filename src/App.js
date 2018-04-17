import React, { Component } from 'react';
import './App.css';
import Cell from './Cell'
class App extends Component {
  state = {
    board: ["___#____#_____", "___#____#_____", "___#____#_____"],
    currentSquare: 0,
    currentWord: [],
    directionAcross: true
  }
  boardWidth = this.state.board[0].length;
  componentWillMount(){
    this.findCurrentWord(0);
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

  moveFocus = (id) => {
    this.findCurrentWord(id)
    this.setState({
      currentSquare: parseInt(id)
    })
  }

  squareClickHandler = (event) => {
    // this is the current square
    let id = event.target.id
    this.moveFocus(id)
  }

  keyPressHandler = (event) => {
    // add to board in state
    console.log(event.keyCode)
    if (this.state.directionAcross){
      // if spacebar or letter
      if (event.keyCode === 32 || (event.keyCode < 91 && event.keyCode > 64)){
        // find the next blank square
        let id = parseInt(event.target.id);
        let squareBlank = false;
        while (squareBlank === false){
          id++
          if (this.state.board.charAt(id) !== "#"){
            this.moveFocus(id)
            squareBlank = true
          }
        }
      }
    }
    // if we're going down we need to change id + 1 + the width of the grid
    else if (!this.state.directionAcross){

    }
  }
  render() {
    const rows = []
    let masterIndex = -1;
    this.state.board.forEach((row, rowIndex) => {
      let squares = row.split("").map((square, squareIndex) => {
        masterIndex++
        let color = "black"
        let clickHandler;
        if (square !== "#"){
          color = "white";
          // only add click handlers to white squares
          clickHandler = (event) => this.squareClickHandler(event)
        }
        // highlight current word
        if (this.state.currentWord.indexOf(masterIndex) !== -1){
          color = "lightblue"
        }

        // highlight current box
        let inFocus = false;
        if (masterIndex === this.state.currentSquare){
          color = "#FFE04D"
          inFocus = true;
        }
        return (
          <Cell
            color={color}
            id={masterIndex} key={masterIndex}
            click={clickHandler}
            inFocus={inFocus}
            keyPress={(event) => this.keyPressHandler(event)}
          />
        )
      })
        let newRow = <div style={{display: "flex"}}>{squares}</div>
        rows.push(newRow)
        masterIndex++
    })
    return (
      <div className="container">
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
          <div className="grid d-flex flex-column">
            <div>
              {rows}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
