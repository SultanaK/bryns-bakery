import React, {useState} from 'react'
import DATA from '../DATA'
import arrow from '../images/nextAndprevArrow.png'

export default function Carousel(){
    const imgArr = DATA.slideshow;
    const [count, setCount] = useState(0)
    
    const next = () => {
        return count === imgArr.length - 1 ? setCount(0) : setCount(count + 1)
    }

    const prev = () => {
        return count === 0 ? setCount(imgArr.length - 1) : setCount(count - 1)
    }

    return (
        <div className='carousel'>
        <button onClick={() => prev()}><img src={arrow} alt='next' className='prev'/></button>
        <img className='carousel-img' src={imgArr[count].src} alt={imgArr[count].alt} />
        <button onClick={() => next()}><img src={arrow} alt='next' className='next'/></button>
        </div>
    )
}