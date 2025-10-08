import React from 'react'
import Exercício1 from './components/Exercício1'
import DarkMode from './components/DarkMode'
import Campanha from './components/Campanha'

function App() {

  return (
    <div>
      <div>
        <Exercício1 />
      </div>
      <hr />
      <div>
        <DarkMode isDarkMode={true} />

        <DarkMode isDarkMode={false} />
      </div>
      <hr />
      <div>
        <Campanha mes="setembro" />
        <Campanha mes="outubro" />
        <Campanha mes="novembro" />
      </div>
      <hr />
      
    </div>
  )
}

export default App
