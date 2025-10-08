import React from 'react'
import { useState } from 'react'

const HookMegaSena = () => {

  const [numeroSorteado, setNumeroSorteado] = useState(null)
  const [numeros, setNumeros] = useState([])

  function sortearNumero(){
    if(numeros.length < 6) {

      let numero
      do {
        numero = Math.floor(Math.random() * 60) + 1
      } while (numeros.includes(numero))
      
      setNumeroSorteado(numero)
      setNumeros([...numeros, numero])

    } else {
      alert("Já temos 6 números sorteados!")
    }
  }

  

  return (
    <div>
      <h1>Sorteador da Mega em React! :)</h1>
      <p>
        <strong>Último Número sorteado: {numeroSorteado}</strong>
      </p>

      <h3>Sorteados: {numeros.join(' - ')}</h3>
      
      <button onClick={sortearNumero}>
        Sortear Número
      </button>
    </div>
  )
}

export default HookMegaSena