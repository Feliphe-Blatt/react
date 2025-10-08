import React from 'react'

const EstaComSono = (props) => {
  return (
    <div>
      <h1>Estou com sono?</h1>
      {props.estaComSono ? <h4>Hora de descansar! 😴</h4> : <h4>Bora estudar mais um pouco! 💪</h4>}
    </div>
  )
}

export default EstaComSono