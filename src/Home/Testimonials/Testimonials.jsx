import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import "swiper/css"
import "swiper/css/navigation"

import './Testimonials.css'

const Testimonials = () => {

const reviews = [
  {
    id: 1,
    name: "Arun Kumar",
    rating: "★★★★★",
    comment: "The mobile performance is excellent 🔥 The camera quality is very sharp. Totally worth the price!",
    location: "Chennai"
  },
  {
    id: 2,
    name: "Priya S",
    rating: "★★★★☆",
    comment: "Battery life is great. It easily lasts a full day. Delivery was also very fast 👌",
    location: "Coimbatore"
  },
  {
    id: 3,
    name: "Vignesh R",
    rating: "★★★★★",
    comment: "Gaming performance is amazing 🔥 PUBG runs very smoothly and the display clarity is awesome.",
    location: "Madurai"
  },
  {
    id: 4,
    name: "Sneha",
    rating: "★★★★☆",
    comment: "The design and color look very stylish 😍 The camera night mode works really well.",
    location: "Bangalore"
  }
]

return (
  <div className="container mt-5">

    <h2 className="text-center mb-4">
      Happy Customers, Real Reviews
    </h2>

    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 2500 }}
      loop={true}
      spaceBetween={20}

      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 }
      }}
    >

      {reviews.map((review) => (

        <SwiperSlide key={review.id} className="swiper-inner">

          <div className="review-card text-center">

            <h4>{review.name}</h4>
            <p>{review.comment}</p>
            <p>{review.rating}</p>
            <small>{review.location}</small>

          </div>

        </SwiperSlide>

      ))}

    </Swiper>

  </div>
)
}

export default Testimonials