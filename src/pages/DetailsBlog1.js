import React from "react"
import cayTrauBaCamThach1 from "../assets/cay-trau-ba-cam-thach.jpg"
import { PageHero } from '../components'
import styled from 'styled-components'

const DetailsBlog1 = () => {
  return (
    <main>
        <PageHero title='details' />
        <Wrapper className='page1'>
    <div>
      <div className="div-2">
        <span className="span-1">HƯỚNG DẪN CHĂM SÓC CÂY TRẦU BÀ CẨM THẠCH</span>
        <span className="span-2">
          {" "}
          Trầu bà cẩm thạch (PHILODENDRON NJOY) được nhiều người chơi cây yêu
          thích vì khả năng lọc không khí tốt mà lại còn dễ chăm sóc. Giống với
          các loại trầu bà khác, loài cây này cũng cần được đảm bảo một số yếu
          tố cơ bản về ánh sáng, lượng nước, độ ẩm, nhiệt độ, dinh dưỡng để cây
          sinh trưởng và phát triển tốt nhất.<br></br><br></br>
        </span>
        <div className="div-3">
          <div className="div-4">
            <img className="img-1" src={cayTrauBaCamThach1} />
            <span className="span-3"></span>
          </div>
          <div className="div-5">
            <span className="span-4">ÁNH SÁNG</span>
            <div className="div-6">
              <span className="span-5">
                So với những loài cây khác, ngưỡng ánh sáng của Trầu bà cẩm
                thạch tương đối rộng khoảng từ 25-100FC. Tuy nhiên, để lá cây có
                thể sở hữu màu áo đẹp nhất, hãy cho chúng được sống dưới ánh
                sáng gián tiếp của mặt trời. Đấy là điều kiện ánh sáng hoàn hảo
                nhất cho cây. Nếu không gian nhà bạn không thể đón nắng tự
                nhiên, chúng ta chỉ cần ánh sáng đèn điện cho cây là đủ. Không
                đặt cây dưới ánh sáng mạnh. Điều này sẽ khiến lá cây chuyển sang
                màu nâu.
              </span>
              <span className="span-3">TƯỚI NƯỚC</span>
            </div>
            <span className="span-7">
              Có thể nói trầu bà cẩm thạch khá ưa nước. Trung bình 2 ngày thực
              hiện tưới nước cho cây một lần là đủ. Nếu muốn bạn có thể tưới mỗi
              ngày nhưng đừng biến chậu cây thành bể bơi nhé! Những ngày trời
              hanh khô hoặc chăm cây trong phòng sử dụng máy lạnh cũng nên bổ
              sung thêm nước cho cây. Tránh đặt cây trực tiếp dưới luồng gió của
              máy lạnh nhé!
            </span>
          </div>
        </div>
        <span className="span-2">
          <b>ĐỘ ẨM</b><br></br>
          Trầu bà cẩm thạch là cây ưa ẩm. Độ ẩm trung bình thích hợp cho sự tăng
          trưởng mạnh của cây. Không nên để cây quá khô hạn, chúng sẽ rụng bớt
          lá để tiết kiệm nước. Ngoài việc cho cây uống nước, thường xuyên phun
          sương trên lá cũng là cách giúp cây cân bằng độ ẩm.
        </span><br></br>
        <span className="span-9">DINH DƯỠNG</span>
        <span className="span-10">
          Trầu bà cẩm thạch dù không được chăm sóc kĩ lưỡng vẫn cứ lớn lên mỗi
          ngày. Bạn có thể kiểm chứng qua những ngọn xanh của cây. Dây leo mỗi
          ngày một dài hơn mà chẳng cần bón phân. Tuy nhiên, khoảng 2-3 tháng
          bạn có thể bổ sung ít dinh dưỡng để tiếp sức cho cây sinh trưởng mạnh
          mẽ hơn.
        </span>
        <span className="span-9">NHIỆT ĐỘ</span>
        <span className="span-2">
          Nhiệt độ tối ưu dành cho loài cây này nằm trong khoảng 18-28 độ C.
          Điều kiện môi trường càng mát mẻ, cây càng sống thoải mái và xinh đẹp.
          Không đặt cây ở nơi có nhiệt độ cao khiến cây cháy lá.
        </span>
        <span className="span-13">Chúc bạn thành công !</span>
      </div>
    </div>
</Wrapper>
    

</main>
  )
}


const Wrapper = styled.section`
.div-2 {
  max-width: 1519px;
  min-height: 577px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 13px 64px 33px 64px;
  height: 100%;
  width: 100%;
  background: #ffffff;
  font-size: 15px;
  font-weight: 400;
  line-height: 17px;
  color: #000000;
}
.span-1 {
  font-size: 36px;
  line-height: 42px;
  flex-basis: 42px;
  margin: 10px 0px 20px 84px;
  color: #93cf92;
  margin-left: 170px;
}
.span-2 {
  flex-basis: 36px;
  margin: 0px 0px 0px 64px;
}
.div-3 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 21px;
  align-items: start;
  flex-basis: 229px;
  margin: 0px 0px 0px 64px;
}
.div-4 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 5px;
  align-items: start;
  flex-basis: 308px;
  height: 100%;
  margin: 0px 0px 0px 0px;
}
.img-1 {
  height: 202px;
  width: 308px;
  flex-basis: 202px;
}
.span-3 {
  font-weight: 700;
  flex-basis: 18px;
}
.div-5 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 2px;
  align-items: start;
  flex-basis: 845px;
  height: 100%;
  margin: 0px 0px 0px 0px;
}
.span-4 {
  font-weight: 700;
  flex-basis: 20px;
}
.div-6 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: -14px;
  align-items: start;
  flex-basis: 112px;
  width: 100%;
  margin: 0px 0px 0px 0px;
}
.span-5 {
  flex-basis: 108px;
  margin: 0px 0px 0px 14px;
}
.span-7 {
  flex-basis: 90px;
  margin: 0px 0px 0px 14px;
}
.span-9 {
  font-weight: 700;
  flex-basis: 18px;
  margin: 0px 0px 0px 64px;
}
.span-10 {
  flex-basis: 53px;
  margin: 0px 0px 0px 64px;
}
.span-13 {
  flex-basis: 18px;
  margin: 0px 0px 0px 64px;
}
`
export default DetailsBlog1