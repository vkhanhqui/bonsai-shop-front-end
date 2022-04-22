import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    
    <Container>
      
      <div>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Green Life </span>
        All rights reserved
      </h5>
     
      </div>
    </Container>
  )
}

const Container = styled.footer`

  
.social-button{
  display: inline-grid;
    position: fixed;
    bottom: 15px;
    left: 45px;
    min-width: 45px;
    text-align: center;
    z-index: 99999;
}
.social-button-content{
  display: inline-grid;   
}
.social-button a {padding:8px 0;cursor: pointer;position: relative;}
.social-button i{
  width: 40px;
    height: 40px;
    background: #43a1f3;
    color: #fff;
    border-radius: 100%;
    font-size: 20px;
    text-align: center;
    line-height: 1.9;
    position: relative;
    z-index: 999;
}
.social-button span{
  display: none;
}
.alo-circle {
    animation-iteration-count: infinite;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: zoomIn;
    width: 50px;
    height: 50px;
    top: 3px;
    right: -3px;
    position: absolute;
    background-color: transparent;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    border: 2px solid rgba(30, 30, 30, 0.4);
    opacity: .1;
    border-color: #0089B9;
    opacity: .5;
}
.alo-circle-fill {
  animation-iteration-count: infinite;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: pulse;
    width: 60px;
    height: 60px;
    top: -2px;
    right: -8px;
    position: absolute;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    border: 2px solid transparent;
    background-color: rgba(0, 175, 242, 0.5);
    opacity: .75;
}
.call-icon:hover > span, .mes:hover > span, .sms:hover > span, .zalo:hover > span{display: block}
.social-button a span {
    border-radius: 2px;
    text-align: center;
    background: rgb(103, 182, 52);
    padding: 9px;
    display: none;
    width: 180px;
    margin-left: 10px;
    position: absolute;
    color: #ffffff;
    z-index: 999;
    top: 9px;
    left: 40px;
    transition: all 0.2s ease-in-out 0s;
    -moz-animation: headerAnimation 0.7s 1;
    -webkit-animation: headerAnimation 0.7s 1;
    -o-animation: headerAnimation 0.7s 1;
    animation: headerAnimation 0.7s 1;
}
@-webkit-keyframes "headerAnimation" {
    0% { margin-top: -70px; }
    100% { margin-top: 0; }
}
@keyframes "headerAnimation" {
    0% { margin-top: -70px; }
    100% { margin-top: 0; }
}
.social-button a span:before {
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 10px 0;
  border-color: transparent rgb(103, 182, 52) transparent transparent;
  position: absolute;
  left: -10px;
  top: 10px;
}
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-7);
  }
  h5 {
    color: var( --clr-white);
    margin: 0.1rem;

    font-weight: 400;cc
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
