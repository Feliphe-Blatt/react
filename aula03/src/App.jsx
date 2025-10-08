import React, { useState } from 'react'
import HookContador from './components/HookContador.jsx'
import HookMegaSena from './components/HookMegaSena.jsx'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact.jsx'
import EstaComSono from './components/EstaComSono.jsx'
import Aluno from './components/Aluno.jsx'
import Produto from './components/Produto.jsx'

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

      <hr />

      <div>
        <EstouConseguindoAprenderReact estouConseguindo={true}/>

        <EstouConseguindoAprenderReact estouConseguindo={false}/>
      </div>

      <hr />

      <div>
        <EstaComSono estaComSono={true} />

        <EstaComSono estaComSono={false} />
      </div>

      <hr />

      <div>
        <h1>Lista de Alunos:</h1>
        {
          [
            {
              nome: "Feliphe Blatt",
              email: "feliphe.blatt@exemplo.com",
              curso: "Sistemas para Internet",
              media: 8.5
            },
            {
              nome: "Bruno Silva",
              email: "bruno.silva@exemplo.com",
              curso: "Física",
              media: 6.0
            },
            {
              nome: "Carla Souza",
              email: "carla.souza@exemplo.com",
              curso: "Química",
              media: 7.5
            }
          ].map((aluno, index) => (
            <Aluno
              index={index}
              nome={aluno.nome} 
              email={aluno.email} 
              curso={aluno.curso}
              media={aluno.media}
            />
          ))
        }
      </div>

      <div>
        <h1>Lista de Produtos:</h1>
        {
          [
            {
              nome: "Notebook",
              preco: 3500,
              categoria: "Eletrônicos",
              quantidade: 5
            },
            {
              nome: "Smartphone",
              preco: 2500,
              categoria: "Eletrônicos",
              quantidade: 0
            },
            {
              nome: "Cadeira Gamer",
              preco: 1200,
              categoria: "Móveis",
              quantidade: 10
            }
          ].map((produto, index) => (
            <Produto
              index={index}
              nome={produto.nome}
              preco={produto.preco}
              categoria={produto.categoria}
              quantidade={produto.quantidade}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App