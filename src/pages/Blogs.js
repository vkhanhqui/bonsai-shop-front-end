import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/senda.jpg'
import aboutImgs from '../assets/phoingang.jpg'
import img1 from '../assets/blog3.jpg'
import img2 from '../assets/traubacamthach.jpg'
import img3 from '../assets/dabupdo.jpg'
import img4 from '../assets/dolar.jpg'
import img5 from '../assets/BLOG7.jpg'
import { Link } from 'react-router-dom'
const Blogs = () => {
  return (
    <main>
      <PageHero title='Tin tức' />
      <Wrapper className='page section section-center'>

        <img src={aboutImg} alt='nice desk' />
        <article>
          <div className='title'>
          <Link to='/details' className='blogdetails'>

           HƯỚNG DẪN CHĂM SÓC SEN ĐÁ

         </Link>
            <div className='underline'></div>
          </div>
          <p>
          Sen đá là tên gọi của một loài xương rồng có những cánh hoa xếp chồng lên nhau trông giống như hoa sen. Nhóm cây này có nguồn gốc từ châu Mỹ, châu Phi và đã trở nên phổ biến được người dân nuôi trồng và chăm bón. Cách chăm sóc sen đá cũng không quá cầu kỳ, phức tạp.
          Hãy cùng Green Life tìm hiểu cách chăm sóc loại cây này nhé.
          </p>

        </article>

        <img src={aboutImgs} alt='nice desk' />
        <article>
          <div className='title'>
          <Link to='/details4' className='blogdetails'>

   BẠN ĐÃ PHƠI NẮNG CHO CÂY ĐÚNG CÁCH CHƯA ?

 </Link>
            <div className='underline'></div>
          </div>
          <p>
            Chúng ta có nên phơi nắng cây nội thất ? Hãy theo dõi bài viết sau đây để hiểu thêm về cây và cách phơi nắng cây cho đúng nhé.
          </p>
        </article>

        <img src={img1} alt='nice desk' />
        <article>
          <div className='title'>

          <Link to='/details2' className='blogdetails'>

   NGƯỜI MỚI CHƠI NÊN CHĂM CÂY GÌ ?

 </Link>
            <div className='underline'></div>
          </div>
          <p>
            Khi muốn tân trang lại căn bếp của gia đình, thường bạn sẽ nghĩ tới điều gì? Làm mảng tường bắt mắt và dễ làm sạch? Thay thế những thiết bị nhà bếp hiện đại, đa năng?
            ...Còn một cách đơn giản, ít tốn kém và mang lại rất nhiều lợi ích có thể bạn chưa nghĩ tới: Thêm cây xanh cho bếp.
          </p>
        </article>

        <img src={img2} alt='nice desk' />
        <article>
          <div className='title'>

          <Link to='/details1' className='blogdetails'>

        HƯỚNG DẪN CHĂM SÓC TRẦU BÀ CẨM THẠCH

        </Link>
            <div className='underline'></div>
          </div>
          <p>
            Trầu bà cẩm thạch rất được ưa chuộng trong trang trí nội thất nhà ở, văn phòng và đặc biệt là quán cà phê, giàn treo tại sân thượng.
            Loại cây này được biết đến với vẻ ngoài đẹp độc đáo và mang lại nhiều công dụng cho đời sống. Đừng bỏ qua thông tin hữu ích về cây Trầu bà cẩm thạch sau đây.
          </p>
        </article>

        <img src={img3} alt='nice desk' />
        <article>
          <div className='title'>

          <Link to='/details3' className='blogdetails'>

   HƯỚNG DẪN CHĂM SÓC CÂY ĐA BÚP ĐỎ

 </Link>
            <div className='underline'></div>
          </div>
          <p>
            Cây Đa Búp Đỏ (FICUS ELASTICA ROBUSTA) còn có tên gọi khác là cây Da Nhật - một loại thực vật có khả năng hút được khói thuốc lá, hydrogen fluoride và một số chất gây ung thư khác.
            Đa Búp Đỏ mang ý nghĩa giúp cho gia đình luôn êm ấm và hạnh phúc.
          </p>
        </article>

        <img src={img4} alt='nice desk' />
        <article>
          <div className='title'>

          <Link to='/detsiler' className='blogdetails'>

   ĐÔ LA HỒNG

 </Link>
            <div className='underline'></div>
          </div>
          <p>
            Cây Đô la là loài cây có tên vô cùng độc đáo, khiến nhiều người cảm thấy tò mò. Cây này không chỉ đẹp mắt mà còn là biểu tượng của may mắn, tài lộc.
            Nếu bạn còn băn khoăn không biết cây Đô la là cây gì, có nguồn gốc và ý nghĩa thế nào thì đừng
            bỏ qua bài viết sau nhé. Những thông tin sau sẽ cung cấp cho bạn cái nhìn tổng quan về loài cây này.
          </p>
        </article>

        <img src={img5} alt='nice desk' />
        <article>
          <div className='title'>
          <Link to='/detsiler' className='blogdetails'>

   11 BÍ "KÍP" CỦA NGHỆ THUẬT TẶNG QUÀ

 </Link>
            <div className='underline'></div>
          </div>
          <p>
            Một sự thật hiển nhiên luôn tồn tại đó là nơi nào có cuộc sống, nơi đó có quà tặng. Đặc biệt hơn, khi cuộc sống
            con người ngày càng hiện đại thì nhu cầu tặng quà và được tặng quà ngày càng được quan tâm.
            Tặng quà là một hoạt động giao tiếp trong cuộc sống hiện đại và trong bất cứ mối quan hệ nào
            cũng có nó: bạn bè, gia đình, người yêu, khách hàng công việc, đối tác,...
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  img {
    width: 200px;
    display: block;
    border-radius: var(--radius);
    height: 200px;
    object-fit: cover;
  }

  h2{
    font-family:"Courier New", BrushScript, monospace;

    color: rgb(0,100,0);
  }
  .blogdetails{
    font-family:"Courier New", BrushScript, monospace;

    color: rgb(0,100,0);
    font-size: 30px;

 }
  p {
    line-height: 2;
    max-width: 70rem;
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
    grid-template-columns: 1fr 5fr;
  }
`
export default Blogs
