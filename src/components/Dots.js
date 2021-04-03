/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

import Dot from './Dot'

const Dots = (props) => {
  const { slides, activeSlideIndex, onClickHandler } = props

  return (
    <div
      css={css`
        position: absolute;
        bottom: 10px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.map((image, index) => {
        return <Dot
          key={image.id}
          index={index}
          active={activeSlideIndex === index}
          onClickHandler={onClickHandler} />
      })}
    </div>
  )
}

export default Dots