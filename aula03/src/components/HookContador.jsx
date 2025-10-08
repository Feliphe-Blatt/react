import React from 'react'
import { useState } from 'react'

const HookContador = () => {

  const [contador, setContador] = useState(1)

  function incrementar() {
    setContador(contador + 1)
  }

  function decrementar() {
    setContador(contador - 1)
  }
  
  return (
    <div>
      <h2>Contador: {contador}</h2>

      <button onClick={() => incrementar()}>
        Incrementar
      </button>

      <button onClick={() => decrementar()}>
        Decrementar
      </button>

    <h6>*Ao atualizar a página, o useState retorna ao valor original*</h6>
    </div>
  )
}

export default HookContador