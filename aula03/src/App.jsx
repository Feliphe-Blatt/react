import React, { useState } from 'react'
import HookContador from './components/HookContador.jsx'
import HookMegaSena from './components/HookMegaSena.jsx'

const App = () => {
  return (
    <div>
      <div>
        <HookContador />
      </div>

      <hr />

      <div>
        <HookMegaSena />
      </div>

    </div>
  )
}

export default App