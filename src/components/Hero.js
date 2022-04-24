import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/background.jpg'
import heroBcg2 from '../assets/h3.jpg'
const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
      <h1>
          Mang đến cho bạn cuộc sống xanh <br />
        
        </h1>
        <p>
          Khi bạn bế tắc trong cuộc sống, Green Life có thể giúp bạn tĩnh tâm và có động lực trong cuộc sống hiện đại.<br></br>
          "Khi tôi bận tâm về điều gì đó, tôi bỏ chút thời gian ở giữa thiên nhiên, và luôn luôn tìm được câu trả lời. – Katrina Mayer"
        </p>
        <Link to='/products' className='btn hero-btn'>
          Mua sắm ngay
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='nice table' className='main-img' />
        <img src={heroBcg2} alt='person working' className='accent-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      font-family:"Courier New", BrushScript, monospace;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-10);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
