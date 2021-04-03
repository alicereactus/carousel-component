/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'

import leftArrow from '../assets/images/previous.svg'
import rightArrow from '../assets/images/next.svg'

const Arrow = (props) => {
  const { direction, handleClick } = props

  return (
    <div
      onClick={handleClick}
      css={css`
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        ${direction === 'right' ? `right: 10px` : `left: 10px`};
        height: 30px;
        width: 30px;
        background: white;
        opacity: 0.5;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      `}
    >
      {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
    </div>
  )
}

export default Arrow
