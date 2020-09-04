import React, {useState} from 'react'
import DATA from '../DATA'

export default function Carousel(){
    const imgArr = DATA.slideshow;
    const [count, setCount] = useState(0)
    
    const next = () => {
        return count === imgArr.length - 1 ? setCount(0) : setCount(count + 1)
    }

    const prev = () => {
        return count === 0 ? setCount(imgArr.length - 1) : setCount(count - 1)
    }

    console.log(count)
    return (
        <div className='carousel'>
        <button onClick={() => prev()}>prev</button>
        <img src={imgArr[count].src} alt={imgArr[count].alt} />
        <button onClick={() => next()}>next</button>
        </div>
    )
}