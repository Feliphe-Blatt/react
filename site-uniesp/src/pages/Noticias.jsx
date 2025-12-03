import React, { useEffect, useState } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const Noticias = () => {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/noticias")
      .then(response => {
        setNoticias(response.data)
      })
      .catch(error => {
        console.error("Erro ao buscar as notícias:", error)
      })
  }, [])

  return (
    <Container className='py-4'>
      <h2 className='mb-4'>Notícias</h2>
      
      <Card className='mb-4 shadow-sm'>
        <Card.Body>
          <Card.Text>
            <p>
              Fique por dentro das últimas novidades e acontecimentos da Faculdade UNIESP.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Row className="g-4">
        {noticias.map(noticia => (
          <Col md={6} key={noticia.id}>
            <Card className='h-100 shadow-sm'>
              <Card.Img 
                variant="top" 
                src={noticia.imagem} 
                alt={noticia.titulo}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
                <Card.Text className='text-muted' style={{ fontSize: '0.85rem' }}>
                  {new Date(noticia.data).toLocaleDateString('pt-BR')}
                </Card.Text>
                <Card.Text>{noticia.resumo}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Noticias