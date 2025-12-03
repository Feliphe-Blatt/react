import React from 'react'
import BannerAd from '../components/BannerAd'
import { Container, Card, Row, Col } from 'react-bootstrap'



const Inicio = () => {
  return (
    <Container className="py-4">
      <BannerAd />
      <Card>
        <Card.Body>
          <p>
            A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
          </p>
          <p>
            Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
          </p>
          <p>
            A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
          </p>
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

      <Row className="mt-4">
        <Col md={6}>
          <Card className='text-center shadow-sm'>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0"
              alt='Parceria com Empresas'
              title='Parceria com Empresas'
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <Card.Body>
              <Card.Title>Parceria com Empresas</Card.Title>
              <Card.Text>
                Mantemos acordos com empresas locais e multinacionais que oferecem estágios supervisionados, programas de trainee e cases reais em sala para aproximar os estudantes do mercado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='text-center shadow-sm'>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
              alt='Compromisso com a Educação'
              title='Compromisso com a Educação'
              style={{ objectFit: 'cover', height: '200px' }}
            />
            <Card.Body>
              <Card.Title>Compromisso com a Educação</Card.Title>
              <Card.Text>
                Investimos continuamente em capacitação docente, metodologias ativas e projetos de extensão para garantir que cada aluno tenha uma experiência acadêmica completa e transformadora.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Inicio