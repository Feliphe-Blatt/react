import React from 'react'
import Raposo from '../assets/raposo.jpeg'

const TrabalhandoComImagens = () => {
  return (
    <div>
      <h1>Trabalhando com Imagens</h1>

      <h3>Imagem da pasta Public:</h3>
      <img src="/moai.webp" alt="Moai" width="150px"/>

      <h3>Imagem da pasta Assets:</h3>
      <img src={Raposo} alt="Raposo da dora aventureira." title='Raposo não pegue!' width="150px"/>
    </div>
  )
}

export default TrabalhandoComImagens