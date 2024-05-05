import React from 'react'
// import { RxDotFilled } from 'react-icons/rx'
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import Marquee from 'react-fast-marquee'

const Sponsors = () => {

  const slides = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyd6XRpQ88zBesaCWJZKuo7Nfvu1axUEeFzB46CQr3aQ&s"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_CryguD-uQkRfpzqa-wtZf8lL_-thUnyIrNRL1RaOw&s"
    }
  ]

  // const [current, setCurrent] = useState(0)

  // const nextSlide = () => {
  //   setCurrent(prevCurrent => current === slides.length - 1 ? 0 : prevCurrent + 1)
  // }
  // const prevSlide = () => {
  //   setCurrent(prevCurrent => current === 0 ? slides.length - 1 : prevCurrent - 1)
  // }

  return (
    <div id='sponsors' className='relative flex flex-col gap-20 my-10'>
      <h2 className='text-3xl font-bold'>SPONSORS</h2>
      <Marquee speed={150} pauseOnHover>
        {
          slides.map((slide, index) => (
            <img key={index} src={slide.src} alt='SPONSOR' className='h-56 px-4 inline-block' />
          ))
        }
      </Marquee>
      <Marquee direction='right' speed={150} pauseOnHover>
        {
          slides.map((slide, index) => (
            <img key={index} src={slide.src} alt='SPONSOR' className='h-56 px-4 inline-block' />
          ))
        }
      </Marquee>
    </div>
  )
}

export default Sponsors