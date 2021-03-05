import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  @keyframes ldio-0papd6qpzgo {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  .ldio-0papd6qpzgo div {
    left: 48px;
    top: 24px;
    position: absolute;
    animation: ldio-0papd6qpzgo linear 1s infinite;
    background: #ffffff;
    width: 4px;
    height: 12px;
    border-radius: 2px / 2.2800000000000002px;
    transform-origin: 2px 26px;
  }
  .ldio-0papd6qpzgo div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -0.9166666666666666s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -0.8333333333333334s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.75s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.6666666666666666s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.5833333333333334s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.5s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.4166666666666667s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.3333333333333333s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.25s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.16666666666666666s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.08333333333333333s;
    background: #ffffff;
  }
  .ldio-0papd6qpzgo div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
    background: #ffffff;
  }
  .loadingio-spinner-spinner-alx2d5z5kk5 {
    width: 40px;
    height: 31px;
    display: inline-block;
    overflow: hidden;
  }
  .ldio-0papd6qpzgo {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(0.4);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-0papd6qpzgo div {
    box-sizing: content-box;
  }
`;

export const Loader = () => {
  return (
    <Spinner>
      <div className="loadingio-spinner-spinner-alx2d5z5kk5">
        <div className="ldio-0papd6qpzgo">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Spinner>
  );
};
