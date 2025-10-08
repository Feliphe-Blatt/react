import React from 'react'
import { useState, useEffect } from 'react'

const url = 'http://localhost:3000/alunos'

const ResgatandoDados = () => {
  
  const [alunos, setAlunos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setAlunos(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Resgatando Dados de uma API</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map(aluno => (
            <tr key={aluno.id}>
              <td>{aluno.id}</td>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.nota}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResgatandoDados