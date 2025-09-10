import React from 'react'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'
import ExemplosOnClick from './components/ExemplosOnClick'

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Componentes React:</h1>

      <h3>Adição</h3>
      <Adicao num1={10} num2={5} />
      <h3>Subtração</h3>
      <Subtracao num1={10} num2={5} />
      <h3>Multiplicação</h3>
      <Multiplicacao num1={10} num2={5} />
      <h3>Divisão</h3>
      <Divisao num1={10} num2={5} />

      <hr />
      <h2>Preciso Estudar:</h2>
      <PrecisoEstudar nomeDaTecnologia="React" />
      
      <hr />
      <h2>Exemplos de onClick:</h2>
      <ExemplosOnClick />
    </div>
  )
}

export default App