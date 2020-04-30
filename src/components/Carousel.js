import React, { useState, useEffect } from 'react'
import Swiper from 'swiper'
import axios from 'axios'
import { Link } from 'react-router-dom'

import 'swiper/css/swiper.min.css'
import '../styles/components/Carousel.scss'

const Carousel = () => {
  const [data, setData] = useState({ Details: [] })
  const [error, setError] = useState({ errors: '' })

  useEffect(() => {
    axios
      .get(
        'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'
      )
      .then((res) => {
        setData(res.data)
        var mySwiper = new Swiper('.swiper-container', {
          // Optional parameters
          direction: 'horizontal',
          loop: true,

          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
      .catch((err) => setError({ errors: err.response.status }))
  }, [])

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {data.Details.map((elem, i) => {
          return (
            <div className="swiper-slide" key={i}>
              <div className="title">
                <h1>{elem.Title}</h1>
              </div>
              <div className="subtitle">
                <h2>{elem.Subtitle}</h2>
              </div>
              <button className="blue-button">
                <Link to="/contact-us">Contact Us</Link>
              </button>
              <img src={elem.ImageUrl} alt="carousel" />
            </div>
          )
        })}
      </div>
      <div class="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  )
}
export default Carousel
