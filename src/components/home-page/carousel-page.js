import React from 'react'
import "./carousel-page.scss"
import { Carousel, Container, Image } from 'react-bootstrap'

const CarouselPage = () => {
  return (
    <Container className='container'>
    <Carousel className='carousel' fade>
      <Carousel.Item className='carousel-item'>
        <Image className="deneme" src="../../carousel1.jpg" />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
      <Image className="deneme" src="../../carousel2.jpg" />
      </Carousel.Item>
      <Carousel.Item className='carousel-item'>
      <Image className="deneme" src="../../carousel3.jpg" />
      </Carousel.Item>
    </Carousel>
    
    </Container>
  )
}

export default CarouselPage
