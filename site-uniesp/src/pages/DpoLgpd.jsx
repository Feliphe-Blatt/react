import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Card } from 'react-bootstrap'

const DpoLgpd = () => {
  
  const [dpo, setdpo] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/dpolgpd")
      .then(response => {
        setdpo(response.data)
      })
      .catch(error => {
        console.error("Deu erro ao buscar os dados do DPO:", error)
      })
  }, [])

  return (
    <Container className='py-4'>
      <h2 className='mb-4'>DPO LGPD</h2>
      
      <Card className='mb-4 shadow-sm'>
        <Card.Body>
          <Card.Text>
            <p>
              O DPO (Data Protection Officer) é o encarregado de proteção de dados da nossa instituição, responsável por garantir a conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className='shadow-sm'>
        <Card.Body>
          <ul className='mb-0'>
            {dpo.map(item => (
              <li key={item.id} className='mb-3'>
                {item.texto}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default DpoLgpd