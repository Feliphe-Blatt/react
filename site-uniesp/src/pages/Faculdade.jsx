import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'


const Faculdade = () => {
  return (
    <Container className='py-4'>

      <h2 className='mb-4'>A Faculdade</h2>

      <Card className='mb-4 shadow-sm'>
        <Card.Body>
          <Card.Text>
            <p>
              A Faculdade Uniesp é boa!
            </p>
            <p className='fw-bold'>
              Nós somos mais do que Lorem ipsum...
            </p>
            <p>
              Oferecemos uma ampla variedade de cursos de graduação e pós-graduação, com professores altamente qualificados e infraestrutura moderna para garantir a melhor experiência educacional para nossos alunos.
            </p>
            <p>
              Nossa missão é formar profissionais competentes, éticos e comprometidos com o desenvolvimento social e econômico do país.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Row className="g-4 mt-3">

        <Col md={4}>
          <Card className='text-center h-100 shadow-sm'>
            <Card.Img 
              variant="top" 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786" 
              alt='Instalações da faculdade'
              title='Instalações da faculdade'
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <Card.Body>
              <Card.Title>Vida no Campus</Card.Title>
              <Card.Text>
                Um ambiente vibrante e acolhedor, com atividades...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='text-center h-100 shadow-sm'>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
              alt='Biblioteca'
              title='Biblioteca'
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <Card.Body>
              <Card.Title>Biblioteca</Card.Title>
              <Card.Text>
                Uma biblioteca com um acervo completo e atualizado, incluindo livros, revistas e recursos digitais para pesquisa e estudo.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='text-center h-100 shadow-sm'>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
              alt='Prédio principal'
              title='Prédio principal'
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <Card.Body>
              <Card.Title>Prédio Principal</Card.Title>
              <Card.Text>
                o centro de nossa instituição, com salas de aula modernas e laboratórios equipados para atender às necessidades dos cursos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Faculdade