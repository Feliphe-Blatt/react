import React from 'react'

const Produto = ({index, nome, preco, categoria, quantidade}) => {
  return (
    <div>
      <h2>Produto {index + 1}</h2>
      <h2>Nome: {nome}</h2>
      <h3>Preço: {preco}</h3>
      <h3>Categoria: {categoria}</h3>
      <h3>Quantidade: {quantidade}</h3>
      <h3>Status: {quantidade > 0 ? "Disponível" : "Esgotado"}</h3>
      <hr />
    </div>
  )
}

export default Produto