import React, { Component } from 'react'
class Cell extends Component{
  componentDidMount(){
    if (this.props.inFocus){
      console.log("element in focus = ",this.props.id)
      this.nameInput.focus()
    }
  }
  componentDidUpdate(prevProps, prevState, prevContect){
    if (this.props.inFocus){
      console.log("element in focus = ",this.props.id)
      // this.nameInput is undefined in the render context so I'm doing it here
      this.nameInput.focus()
    }
  }

  render(){
    const bColor = this.props.color;
    const style = {
      height: "40px",
      width: "40px",
      backgroundColor: bColor,
      border: "1px solid black",
      textAlign: "center",
      fontSize: "1.5em",
      textTransform: 'uppercase'
    }
    return(
      <input className="cell" type="text" style={style} id={this.props.id}
        onClick={this.props.click} onKeyUp={this.props.keyPress} ref={this.props.focus}
        ref={(input) => {this.nameInput = input}}
      />
      )
  }
}

export default Cell
