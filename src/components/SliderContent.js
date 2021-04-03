/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react'

const SliderContent = (props) => {
    
    return (
        <div className='sliderContent' css={css`
        position: relative;
        display: flex;
        height: 600px;
        width: 350px;
        border-radius: 15px;
        overflow: hidden;
    `}>
            {props.children}
        </div>
    );
}

export default SliderContent;