import React from 'react'
import { Carousel } from 'react-bootstrap'

const HomeBanner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-27062024-MainBannerDailyChanging-Z1-P3-USPA-TommyHilfiger-MIN50-NEW.jpg'} alt="" className='width-100' />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={'https://assets.ajio.com/cms/AJIO/WEB/d-1.0-UHP-09062024-MainBannerDailyChanging-Z1-P7-Redtape-Carltonlondon-Min75-NEW.jpg'} alt="" className='width-100' />
      <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={'https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-27062024-MainBannerDailyChanging-Z1-P6-VeroModa-Gap-MIN50-NEW.jpgproductdjja'} alt="" className='width-100' />
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeBanner