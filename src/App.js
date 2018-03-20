import React, { Component } from 'react';
import './App.css';
import Cell from './Cell'
class App extends Component {
  constructor(){
    super()
    this.width = 15;
    this.state = {
      board: [    '_','_','_','_','_','#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '_','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '_','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '_','#','#','_','_','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_' +
              '_','_', '_', '_', '_', '#','_','_','_','#','_','_','_','_','_','_'
            ]
    }
  }

  render() {
    var rows = []
    // loop through each row
    for (var i = 1; i <= this.width; i++){
      var cells = []
      // loop through each cell of the current row
      for (var x = 0; x < this.width; x++){
        var value = this.state.board[(i*15)-15 +x]
        console.log((i*15)-15+x)
        var cell = <Cell value={value} className="cell" id={i*x} />
        cells.push(cell)
      }
      var row = <div className="d-flex flex-row">{cells}</div>
      rows.push(row)
    }

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
