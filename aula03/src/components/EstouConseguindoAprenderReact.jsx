import React from 'react'

const EstouConseguindoAprenderReact = (props) => {

  return (
    <div>
      <h1>Estou Conseguindo Aprender React?</h1>
      <p>
        {props.estouConseguindo ? <h3>Estou indo bem...</h3> : <h3>Preciso estudar mais!</h3>}
      </p>
    </div>
  )
}

export default EstouConseguindoAprenderReact