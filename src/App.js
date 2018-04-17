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
    if (this.state.directionAcross){
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
  render() {
    const rows = this.state.board.split("").map((value, index) => {
      let color = "black"
      let clickHandler;
      if (value !== "#"){
        color = "white";
        // only add click handlers to white squares
        clickHandler = (event) => this.squareClickHandler(event)
      }
      // highlight current word
      if (this.state.currentWord.indexOf(index) !== -1){
        color = "lightblue"
      }

      // highlight current box
      let inFocus = false;
      if (index === this.state.currentSquare){
        color = "#FFE04D"
        inFocus = true;
      }
      return (
        <Cell
          color={color}
          id={index} key={index}
          click={clickHandler}
          inFocus={inFocus}
          keyPress={(event) => this.keyPressHandler(event)}
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
