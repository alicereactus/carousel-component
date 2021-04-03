/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react'


const Dot = (props) => {
    const { active, index } = props

    const onClickHandler = () => {
        props.onClickHandler(index)
    }

    return (
        <span
            onClick={onClickHandler}
            index={index}
            css={css`
            padding: ${active ? '8px' : '6px'};
            margin-right: 7px;
            cursor: pointer;
            border-radius: 50%;
            background: ${active ? 'gold' : 'grey'};
      `}
        />
    )
}

export default Dot