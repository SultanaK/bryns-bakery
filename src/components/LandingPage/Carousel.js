import React, {useState} from 'react'
import DATA from '../../services/DATA'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
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
        <>
        <div className='carousel'>
        <IoIosArrowBack onClick={() => prev()} className='arrow'/>
        <div className='flex-column'>
            <div className='title'>
                <h1>Order Today!</h1>
            </div>
            <img className='carousel-img' src={imgArr[count].src} alt={imgArr[count].alt} />
        </div>
        <IoIosArrowForward onClick={() => next()} className='arrow'/>
        </div>
        </>
    )
}