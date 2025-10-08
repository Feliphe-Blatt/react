import React from 'react'

const Aluno = ({index, nome, email, curso, media}) => {
  return (
    <div>
      <h2>Aluno {index + 1}:</h2>
      <h2>Nome: {nome}</h2>
      <h3>Email: {email}</h3>
      <h3>Curso: {curso}</h3>
      <h3>Média: {media}</h3>
      <h3>Status: {media >= 7 ? "Aprovado!" : "Reprovado!"}</h3>
      <hr />
    </div>
  )
}

export default Aluno