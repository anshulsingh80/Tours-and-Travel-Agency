import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>"My family and I embarked on a Riviera trip to Italy, and it was pure magic! The attention to 
         detail in every experience was astounding. From the vineyard tours in Tuscany to the gondola rides 
         in Venice, every moment felt tailor-made.
          Riviera doesn't just take you on a trip; they immerse you in a world of wonder."
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>"I've been a loyal Riviera traveler for years, and each trip feels like
          a new adventure. Whether it's hiking the Inca Trail in Peru or exploring the
           bustling markets of Morocco, Riviera consistently delivers exceptional experiences. 
         Their commitment to sustainable travel practices is also commendable."
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Lia Franklin</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>"As a solo traveler, I was hesitant, but Riviera made my journey through Southeast
          Asia an unforgettable adventure. The local guides were not only knowledgeable but also 
          incredibly friendly, turning every excursion into a vibrant cultural exchange. 
         It felt like traveling with a group of friends rather than a tour company!"
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>"Riviera surpassed all our expectations during our honeymoon in the Maldives. 
         The romantic private dinners under the stars and the breathtaking island-hopping 
         experiences made our trip truly special. Their attention to personalization and creating intimate 
         moments made our once-in-a-lifetime journey even more unforgettable."
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials