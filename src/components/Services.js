import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
           Cuộc sống tươi đẹp <br /> được xây dựng chỉ dành cho bạn
          </h3>
          <p>
            Cùng sống, tìm hiểu và làm việc với cây xanh mỗi ngày, tình yêu với màu xanh ấy
            ngày càng lớn dần và trỗi dậy. Thông qua những sản phẩm xanh, thân thiện với môi trường,
            mỗi người chúng ta tự tìm được chính mình, lắng nghe được những giây phút thư giãn hiếm hoi
            trong tâm hồn, những nhiệp điệu tươi vui của cuộc sống.
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className='service' key={id}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  h3{
    font-size: 2rem;
    font-family: "Courier New", BrushScript, monospace;

  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
