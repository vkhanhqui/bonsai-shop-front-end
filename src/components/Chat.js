import React from 'react'
import styled from 'styled-components'

import 'font-awesome/css/font-awesome.min.css';
import { FaShoppingCart, FaUserMinus, FaUserPlus ,FontAwesomeIcon} from "react-icons/fa";
const Chat = () => {
  return (
    
    <Container>
      <div className="social-button">
    <div className="social-button-content">
       <a href="tel:0981481368" className="call-icon" rel="nofollow">
       <i className="fa fa-whatsapp" aria-hidden="true"/>
          {/* <div className="animated alo-circle"></div>
          <div className="animated alo-circle-fill  "></div> */}
           <span>Hotline:0981481368</span>
        </a>
        <a href="sms:0909090909" className="sms">
          <i className="fa fa-weixin" aria-hidden="true"></i>
          {/* <div className="animated alo-circle"></div>
          <div className="animated alo-circle-fill  "></div> */}
          <span>SMS: 0981481368</span>
        </a>
        <a href="https://www.facebook.com/messages/t/108674048489679/" className="mes">
          <i className="fa fa-facebook-square" aria-hidden="true"></i>
          {/* <div className="animated alo-circle"></div>
          <div className="animated alo-circle-fill  "></div> */}
          <span>Nhắn tin Facebook</span>
        </a>
        <a href="http://zalo.me/" className="zalo">
          <i className="fa fa-commenting-o" aria-hidden="true"></i>
          {/* <div className="animated alo-circle"></div> */}
          {/* <div className="animated alo-circle-fill  "></div> */}
          <span>Zalo: 0981481368</span>
        </a>
    </div>
       
    
  </div>
    
    </Container>
  )
}

const Container = styled.main`

  
.social-button{
  display: inline-grid;
    position: fixed;
    bottom: 150px;
   top:200px;
   right:-50px;
    min-width: 200px;
    text-align: center;
 
}
.social-button-content{
  display: inline-grid;   
}
.social-button a {padding:8px 0;cursor: pointer;position: relative;}
.social-button i{
  width: 40px;
    height: 40px;
    background: hsl(131, 29%, 58%);
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
  right:100px;
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
    right:100px;
    background: rgb(103, 182, 52);
    padding: 9px;
    display: none;
    width: 180px;
    margin-left: 10px;
    position: absolute;
    color: #ffffff;
    z-index: 999;
    top: 9px;
    left: -30px;
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
  right:100px;
  top: 10px;
}
`

export default Chat;
