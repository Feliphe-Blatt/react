import React from 'react'
import { Container, Carousel } from 'react-bootstrap'

const BannerAd = () => {
  return (
    <>
      <Container className='my-4 p-0' fluid>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100" 
              src=""
              alt="Banner Ad 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100" 
              src="https://via.placeholder.com/1200x300?text=Banner+Ad+2"
              alt="Banner Ad 2"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  )
}

export default BannerAd