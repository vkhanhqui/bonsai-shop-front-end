import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about-page.jpg'
const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>Chúng tôi là ai?</h2>
            <div className='underline'></div>
          </div>
          <p>Green Life là một dự án nhỏ cung cấp cho cộng đồng yêu cây cảnh, yêu thích những không gian xanh, sạch.
          Tại website này, bạn sẽ tìm thấy những thông tin về sản phẩm, dịch vụ chăm sóc tinh thần của bạn, chúng tôi luôn mang đến những sự chỉn chu trong từng sản phẩm.
          Green Life không chỉ là một cửa hàng cây cảnh, mà còn là nơi dừng chân sau những xô bồ của cuộc sống vội vã
          Nếu bạn yêu thích sự nhẹ nhàng, sang trọng, đơn giản, Đừng ngần ngại hãy liên hệ với Green Life, hãy để chúng tôi quan tâm đến bạn.
          Green Life xin cảm ơn sự đồng hành và tin tưởng của quý khách trong thời gian vừa qua.</p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  h2{
    font-family:"Courier New", BrushScript, monospace;
    color: hsl(22, 47%, 19%);
  }
  
  p {
    line-height: 2;
    font-size: 20px;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
    
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
