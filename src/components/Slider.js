/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/react'

import { slides } from '../data/data';

import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

const Slider = () => {
    const [state, setState] = useState({
        activeSlideIndex: 0,
        translate: 0,
        transition: 0.5
    })
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const { activeSlideIndex, translate, transition } = state
    const oneSlideWidth = 350
    const commonSlidesWidth = 350 * (slides.length - 1)

    const nextSlide = () => {
        if (translate < commonSlidesWidth) {
            setState({
                ...state,
                translate: translate + oneSlideWidth,
                activeSlideIndex: activeSlideIndex === slides.length - 1 ? 0 : activeSlideIndex + 1
            })
        } else {
            setState({
                ...state,
                translate: 0,
                activeSlideIndex: activeSlideIndex === slides.length - 1 ? 0 : activeSlideIndex + 1
            })
        }
    }


    const prevSlide = () => {
        if (translate <= commonSlidesWidth && translate !== 0) {
            setState({
                ...state,
                translate: translate - oneSlideWidth,
                activeSlideIndex: activeSlideIndex === 0 ? slides.length - 1 : activeSlideIndex - 1
            })
        } else {
            setState({
                ...state,
                translate: commonSlidesWidth,
                activeSlideIndex: activeSlideIndex === 0 ? slides.length - 1 : activeSlideIndex - 1
            })
        }
    }

    const onClickHandler = (activeSlideIndex) => {
        setState({
            ...state,
            translate: activeSlideIndex * oneSlideWidth,
            activeSlideIndex
        })
    }

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
        let delta = touchStart - touchEnd
        if (delta > 70) {
            setState({
                ...state,
                translate: delta + activeSlideIndex * oneSlideWidth,
            })
        }
        else if (delta < -70) {
            setState({
                ...state,
                translate: delta + activeSlideIndex * oneSlideWidth,
            })
        }
    }

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 40) {
            setState({
                ...state,
                translate: (activeSlideIndex + 1) * oneSlideWidth,
                activeSlideIndex: activeSlideIndex === slides.length - 1 ? 0 : activeSlideIndex + 1
            })
        }
        else if (touchStart - touchEnd < -40) {
            setState({
                ...state,
                translate: (activeSlideIndex - 1) * oneSlideWidth,
                activeSlideIndex: activeSlideIndex === 0 ? slides.length - 1 : activeSlideIndex - 1
            })
        }
    }

    return (
        <div className='slider' css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        `}>
            <h2>CAROUSEL COMPONENT</h2>
            <SliderContent>
                {slides.map(image => <Slide
                    key={image.id}
                    content={image.imgUrl}
                    translate={translate}
                    transition={transition}
                    handleTouchStart={handleTouchStart}
                    handleTouchMove={handleTouchMove}
                    handleTouchEnd={handleTouchEnd} />)}
                <Arrow direction="left" handleClick={prevSlide} />
                <Arrow direction="right" handleClick={nextSlide} />
                <Dots
                    slides={slides}
                    activeSlideIndex={activeSlideIndex}
                    onClickHandler={onClickHandler} />
            </SliderContent>
        </div >
    );
}

export default Slider;