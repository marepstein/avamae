import React, { useState, useEffect } from 'react'
import Swiper from 'react-id-swiper'
import axios from 'axios'

// const swiper = new Swiper('.swiper-container', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev'
//   }
// })

const Carousel = () => {
  const [data, setData] = useState()
  const [error, setError] = useState({ errors: '' })

  useEffect(() => {
    axios
      .get(
        'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'
      )
      .then((res) => {
        setData(res.data)
        console.log(data)
      })
      .catch((err) => setError({ errors: err.response.status }))
  }, [data])

  // const url =
  //   'https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details'

  // const Carousel = () => {
  //

  //   useEffect(() => {
  //     let mounted = true

  //     const loadData = async () => {
  //       const response = axios.get(url)
  //       if (mounted) {
  //         setData(response.data)
  //         mounted = false
  //       }
  //     }
  //     loadData()

  //     return () => {
  //       mounted = false
  //     }
  //   }, [data])

  return (
    <div className="swiper-container">
      {/* <div class="swiper-wrapper"> */}
      {/* <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
        <div class="swiper-slide">Slide 10</div>
      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div> */}
    </div>
  )
}
export default Carousel
