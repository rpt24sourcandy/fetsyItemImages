import React from 'react'
/** @jsx jsx */ import { css, jsx } from '@emotion/core'

const Arrow = ({ direction, handleClick }) => (
  <div
    onClick={handleClick}
    css={css`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }

      }
    `}
  >
    {direction === 'right' ?

    <img src={'https://festy-images.s3-us-west-1.amazonaws.com/right-arrow.png'} css={`
      max-width:100%;
      max-height:100%;
    `}/>

    :

    <img src={"https://festy-images.s3-us-west-1.amazonaws.com/left-arrow.png"} css={`
    max-width:100%;
    max-height:100%;
  `}/>}
  </div>
)

export default Arrow