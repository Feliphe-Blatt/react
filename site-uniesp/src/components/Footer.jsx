import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      
      <footer style={{ backgroundColor: '#2b2b2b' }} className="text-white py-4 mt-4">
        <Container>
          <Row>
            <Col md={4} className="mb-3 mb-md-0">
              <h5 className="fw-bold mb-3">UNIESP</h5>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Educação com foco em inovação, impacto social e formação de profissionais preparados para os desafios de amanhã.
              </p>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <h6 className="fw-bold mb-3">Links úteis</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/" className="text-white text-decoration-none" style={{ fontSize: '0.9rem' }}>
                    Início
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/a-faculdade" className="text-white text-decoration-none" style={{ fontSize: '0.9rem' }}>
                    A Faculdade
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/dpo-lgpd" className="text-white text-decoration-none" style={{ fontSize: '0.9rem' }}>
                    DPO e LGPD
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/noticias" className="text-white text-decoration-none" style={{ fontSize: '0.9rem' }}>
                    Notícias
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contato" className="text-white text-decoration-none" style={{ fontSize: '0.9rem' }}>
                    Contato
                  </Link>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h6 className="fw-bold mb-3">Contato</h6>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.8', margin: 0 }}>
                Rua Professor Miguel Couto, 120<br />
                João Pessoa - PB<br />
                Telefone: (83) 3333-1234<br />
                Email: atendimento@uniesp.edu.br
              </p>
            </Col>
          </Row>
          <Row className="mt-4 pt-3 border-top border-secondary">
            <Col className="text-center">
              <p style={{ fontSize: '0.85rem', margin: 0, textAlign: 'left' }}>
                © 2025 UNIESP. Todos os direitos reservados.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer