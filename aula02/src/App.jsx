import React from 'react'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'


const App = () => {
  return (
    <div>
      <div>
        <RenderizandoComFuncoes estado="PB" />
        <RenderizandoComFuncoes estado="PE" />
      </div>

      <div>
        <TrabalhandoComImagens />
      </div>
    </div>
  )
}

export default App