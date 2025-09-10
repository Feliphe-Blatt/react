import React from 'react'

const RenderizandoComFuncoes = (props) => {

    const oQueRenderizar = (estado) => {
        if (estado === "PB") {
            return <h1>João Pessoa</h1>
        }else {
            return <h2>Recife</h2>
        }
    }

  return (
    <div>
        {oQueRenderizar(props.estado)}
    </div>
  )
}

export default RenderizandoComFuncoes