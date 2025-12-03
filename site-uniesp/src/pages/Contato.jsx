import React from 'react'
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap'

const Contato = () => {
  return (
    <Container className='py-4'>
      <h2 className='mb-4'>Contato</h2>
      
      <Card className='mb-4 shadow-sm'>
        <Card.Body>
          <Card.Text>
            <p>
              Entre em contato conosco. Estamos à disposição para esclarecer dúvidas e fornecer informações sobre nossos cursos e serviços.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Row className='g-4'>
        <Col md={6}>
          <Card className='h-100 shadow-sm'>
            <Card.Body>
              <Card.Title className='mb-4'>Envie sua mensagem</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" placeholder="Seu nome completo" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="seu@email.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Telefone</Form.Label>
                  <Form.Control type="tel" placeholder="(83) 99999-9999" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mensagem</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Escreva sua mensagem aqui..." />
                </Form.Group>

                <Button variant="primary" type="submit" className='w-100'>
                  Enviar Mensagem
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className='h-100 shadow-sm'>
            <Card.Body>
              <Card.Title className='mb-4'>Informações de Contato</Card.Title>
              
              <div className='mb-4'>
                <h6 className='fw-bold'>Endereço</h6>
                <p className='text-muted mb-0'>Rua Professor Miguel Couto, 120</p>
                <p className='text-muted'>João Pessoa - PB</p>
              </div>

              <div className='mb-4'>
                <h6 className='fw-bold'>Telefone</h6>
                <p className='text-muted'>(83) 3333-1234</p>
              </div>

              <div className='mb-4'>
                <h6 className='fw-bold'>Email</h6>
                <p className='text-muted'>atendimento@uniesp.edu.br</p>
              </div>

              <div className='mb-4'>
                <h6 className='fw-bold'>Horário de Atendimento</h6>
                <p className='text-muted mb-0'>Segunda a Sexta: 8h às 18h</p>
                <p className='text-muted'>Sábado: 8h às 12h</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Contato