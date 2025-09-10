import React from 'react'

const Divisao = (props) => {
  return (
    <div>
      <h1>O resultado de {props.num1} ÷ {props.num2} = {props.num1 / props.num2}</h1>
    </div>
  )
}

export default Divisao