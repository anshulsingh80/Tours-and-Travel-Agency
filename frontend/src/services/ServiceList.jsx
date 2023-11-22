import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Gives you the exact temprature of places and gives prefrences`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `With a custom automated tour guide.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Custom you journey according to you`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList