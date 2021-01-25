import React, { useState, useRef, useEffect } from 'react';
import classes from '../../convertion/App.css';
import slider1 from '../../images/sliderr.jpg';
import slider2 from '../../images/sliderr2.jpg';
import slider3 from '../../images/sliderr3.jpg';
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io';
import { IoMdCall } from 'react-icons/io';
import { connect } from 'react-redux';

const slider = props =>{
    const [images, setImages] = useState({
        img1: {img: slider1}, img2: {img: slider3}, img3: {img: slider2}
    })
    const [current, setCurrent] = useState(0)
    const timeOut = useRef(null)

    useEffect(() =>{
        const nextSlide = () =>{
            setCurrent(current === length - 1 ? 0 : current + 1)
        }

        timeOut.current = setTimeout(nextSlide, 3000)

        console.log(timeOut.current)

        return function () {
            if (timeOut.current) {
                clearTimeout(timeOut.current)
            }
        }
    }, [current, length])

    const sliderArray = [];
    for (let key in images){
        sliderArray.push({
            id: key,
            image: images[key]
        })
    }

    const length = sliderArray.length;
    
    const nextSlide = () =>{
        if (timeOut.current) {
            clearTimeout(timeOut.current)
        }
        setCurrent(current === length - 1 ? 0: current + 1)

        console.log(current)
    }
      
    const prevSlide = () =>{
        if (timeOut.current) {
            clearTimeout(timeOut.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log(current)
    }
    
    if(!Array.isArray(sliderArray) || sliderArray.length <= 0){
        return null;
    }

    return(
        <div className={classes.slider}>
            {props.nav ? null : <IoIosArrowBack className={classes.slider__arrowBack} onClick={prevSlide}/>}
            {sliderArray.map((slide, index)=>{
                return(
                    <div className={classes.slider__slideImg}>
                        {index === current && (
                        <img src={slide.image.img} alt="slider-image"  key={index} className={classes.slider__img}/>
                            )}
                    </div>
                    // <img src={slide.image.img} alt="slider-image" className={classes.slider__img} key={index}/>
                )
            })}
            {props.nav ? null :<IoIosArrowForward className={classes.slider__arrowForward} onClick={nextSlide}/>}
        
            <div className={classes.slider__call}>
                <IoMdCall className={classes.slider__call__hand}/>
                <div>Call us! 123-456-7890</div>
            </div>
            
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        nav: state.nav
    }
}

export default connect(mapStateToProps)(slider);
