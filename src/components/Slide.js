/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react'

const Slide = (props) => {
    const { content, translate, transition, handleTouchStart, handleTouchMove, handleTouchEnd } = props

    return (
        <img src={content} css={css`
            height: 100%;
            min-width: 100%;
            transform: translateX(-${translate}px);
            transition: transform ease-out ${transition}s;
        `}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        />
    );
}

export default Slide;