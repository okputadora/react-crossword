import React, { Component } from 'react'
import styles from './styles'
class Cell extends Component {
  render(){
    var currentStyle = styles.whiteCell
    if (this.props.value === '#'){
      var currentStyle = styles.blackCell
    }
    return(
      <div className="cell" style={currentStyle}></div>
    )
  }
}

export default Cell
