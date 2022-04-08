import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import image3 from '../assets/senda.jpg'
import image4 from '../assets/about-page.jpg'


const DetailsBlog = () => {
  return (
    <main>
      <PageHero title='details' />
      <Wrapper className='page'>
      <div>
        <span className="span-1">
          CÁCH CHĂM SÓC SEN ĐÁ CHO NGƯỜI MỚI BẮT ĐẦU?
        </span>
        <div className="div-3" />
        <span className="span-2">
          Sen đá là tên gọi của một loài xương rồng có những cánh hoa xếp chồng
          lên nhau trông giống như hoa sen. Nhóm cây này có nguồn gốc từ châu
          Mỹ, châu Phi và đã trở nên phổ biến được người dân nuôi trồng và chăm
          bón. Cách chăm sóc sen đá cũng không quá cầu kỳ, phức tạp.
        </span>
        <span className="span-3">
          Hãy cùng Green Life tìm hiều về cách trồng và chăm sóc loài cây này
          nhé!
        </span>
        <div className="div-4">
          <img className="img-1" src={image3} />
          <div className="div-5">
            <span className="span-4">
              Cách trồng khi mới mua về 
              Việc trộn đất cho sen đá là vấn đề đầu
              tiên và quan trọng nhất khi chăm sóc sen đá. Đây là bước quyết
              định cây sen đá của bạn có sốt tốt hay không nhưng lại là bước mà
              mọi người thường bỏ qua nhiều nhất.
            </span>
            <span className="span-4-1">
              Trộn đất Một hỗn hợp đất thường dùng để trồng sen đá thích hợp cho
              những vùng nóng ẩm bao gồm 3 thành phần có tỷ lệ 4 hỗn hợp tro
              trấu : 4 đá pumice : 2 đá perlite. 2 loại đá này các bạn có thể
              tìm mua tại các đại lý, cửa hàng nuôi trồng cây cảnh.
            </span>
          </div>
        </div>
        <span className="span-6">
          Chọn chậu Có khá nhiều chất liệu để làm nên chậu trồng cây, tuy nhiên
          thì xu hướng bây giờ ai cũng chọn chậu sứ thay vì các chậu nhựa. Sen
          đá, xương rồng để bàn, bản chất của nó khá nhỏ và cũng khá đơn giản.
          Chính vì thế bạn nên đầu tư một chiếc chậu bé, ngộ nghĩnh độc đáo một
          chút sẽ rất tuyệt vời.
        </span>
        <img className="img-2" src={image4} />
        <span className="span-7">
          Tưới nước Trong ngày đầu tiên thay chậu, bạn không tưới nước và phơi
          nắng cho cây. Để cây ở nơi mát mẻ và thoáng gió. Sau khoảng 1 ngày
          tiến hành tưới nước cho cây. Khi tưới nước cho cây, ta cần tưới nước
          thật đậm ở dưới gốc, không tưới lên lá. Chờ cho đến lúc nước khô hoàn
          toàn mới tưới lần tiếp theo. Khoảng từ 2-3 ngày đất sẽ khô hoàn toàn
          nếu bạn để chậu ở nơi thoáng gió và đủ nắng.
        </span>
        <span className="span-8">
          Ánh sáng Phơi nắng đúng cách là phải để cây nhận được ánh nắng trực
          tiếp rọi vào cây như ảnh minh họa (nắng có thể qua lớp cửa kính). Còn
          nếu chỉ để cây ở chỗ có ánh sáng, không nhận được nắng trực tiếp thì
          cây sẽ có biểu hiện thiếu nắng như ảnh cuối cùng.
        </span>
        
        <span className="span-9">
          Hy vọng Green Life đã phần nào giúp những bạn mới trồng sen đá hoặc
          những bạn đã trồng sen đá lâu nhưng vẫn chưa biết cách trồng hiệu quả
          sẽ sở hữu được những chậu sen đá như ý muốn, chúc tình yêu dành cho
          sen đá của các bạn sẽ ngày càng lớn hơn!

          
        </span>
        
        </div>
      </Wrapper>
    

      </main>


  )
}
const Wrapper = styled.section`
display: grid;
min-height: 1700px;
    gap: 2rem;
.span-1{
    position: absolute;
width: 792px;
height: 48px;
left: 304px;
top: 268px;

font-family: Arial;
font-style: normal;
font-size: 30px;
line-height: 48px;
color: #93cf92;
}
.span-2{
    position: absolute;
width: 1263px;
height: 79px;
left: 102px;
top: 357px;

font-family: Arial;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 26px;
}
.span-3{
    position: absolute;
width: 1148px;
height: 52px;
left: 102px;
top: 436px;

font-family: Arial;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 26px;
}
.span-4{
    position: absolute;
width: 607px;
height: 187px;
left: 725px;
top: 502px;

font-family: Arial;
font-style: normal;

font-size: 20px;
line-height: 26px;
}
.span-4-1{
  font-family: Arial;
font-style: normal;

font-size: 20px;
line-height: 26px;
position: absolute;
width: 607px;
height: 187px;
left: 725px;
top: 710px;
}
.span-6{
    position: absolute;
width: 1176px;
height: 112px;
left: 109px;
top: 944px;
font-family: Arial;
font-style: normal;
font-size: 21px;
line-height: 28px;
}
.span-7{
    position: absolute;
width: 1212px;
height: 134px;
left: 109px;
top: 1056px;

font-family: Arial;
font-style: normal;
font-size: 20px;
line-height: 26px;
}
.span-8{
    position: absolute;
width: 1198px;
height: 95px;
left: 109px;
top: 1190px;

font-family: Arial;
font-style: normal;

font-size: 20px;
line-height: 26px;
}
.span-9{
    position: absolute;
width: 1212px;
height: 107px;
left: 127px;
top: 1727px;

font-family: Arial;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 26px;
}

  .img-1 {
    position: absolute;
    width: 603px;
    height: 404px;
    left: 109px;
    top: 488px;
  }
  .img-2 {
    position: absolute;
    width: 520px;
    height: 380px;
    left: 390px;
    top: 1299px;


  .img-3 {
    position: absolute;
    width: 520px;
    height: 380px;
    left: 390px;
    top: 1299px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

`
export default DetailsBlog
