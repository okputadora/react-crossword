import React from 'react'
const Cell = (props) => {
  const bColor = props.color;
  const style = {
    height: "40px",
    width: "40px",
    backgroundColor: bColor,
    border: "1px solid black"
  }
  return(
    <div className="cell" style={style} id={props.id}></div>
  )
}

export default Cell
