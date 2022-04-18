import React from "react"
import dabupdo11 from "../assets/dabupdo1.jpg"
import { PageHero } from '../components'
import styled from 'styled-components'

const DetailsBlog3 = () => {
  return (
    <main>
    <PageHero title='details' />
    <Wrapper className='page1'>
    <div>
      <div className="div-2">
        <span className="span-1">HƯỚNG DẪN CHĂM SÓC CÂY ĐA BÚP ĐỎ</span>
        <div className="div-3">
          <div className="div-4">
            <span className="span-2">
              Cây Đa Búp Đỏ (FICUS ELASTICA ROBUSTA) còn có tên gọi khác là cây
              Da Nhật – một loại thực vật có khả năng hút được khói thuốc lá,
              hydrogen fluoride và một số chất gây ung thư khác. Trong phong
              thủy, Đa Búp Đỏ mang ý nghĩa giúp cho gia đình luôn êm ấm và hạnh
              phúc. Mặc dù cây dễ chăm sóc nhưng bạn vẫn nên chú ý đến các vấn
              đề về ánh sáng, nước, nhiệt độ, độ ẩm và dinh dưỡng nhằm tạo môi
              trường thuận lợi cho sự phát triển của cây trồng.
            </span>
            <div className="div-5">
              <div className="div-6">
                <span className="span-3">ÁNH SÁNG</span>
                <span className="span-4">
                  Đa Búp Đỏ không yêu cầu quá cao về điều kiện ánh sáng nhưng
                  đây là một yếu tố không thể thiếu cho sự phát triển của cây.
                  Chúng cần ánh sáng rực rỡ để phát triển tốt nhất, đồng thời
                  giữ nguyên màu sắc vốn có của loài cây này. Ngược lại, nếu cây
                  sống ở nơi ánh sáng yếu thì lá cây sẽ chuyển thành màu nhạt.
                  Đối với những không gian không có khả năng nhận ánh sáng mặt
                  trời như văn phòng làm việc, bạn hãy đặt chúng ở nơi đón được
                  nhiều ánh sáng đèn điện. Không nên trưng bày chúng ở vị trí
                  khuất sáng để tránh làm giảm vẻ đẹp của lá cây
                </span>
                <span className="span-5">TƯỚI NƯỚC</span>
                <span className="span-6">
                  Cây không cần tưới quá nhiều nước nhưng phải đủ để lá cây
                  không bị héo rũ cũng như đảm bảo độ ẩm cho cây. Tần suất tưới
                  trung bình 2 ngày/lần. Đảm bảo đủ nước cung cấp cho cây trong
                  khoảng thời gian thực hiện lượt tưới tiếp theo.
                </span>
                <span className="span-3">NHIỆT ĐỘ VÀ ĐỘ ẨM</span>
                <span className="span-8">
                  Cây Đa Búp Đỏ yêu thích môi trường có độ ẩm phù hợp. Vì vậy,
                  mỗi khi thời tiết ấm áp hãy phun sương vào lá để tăng độ ẩm
                  cho cây. Việc phun sương còn giúp hạn chế được côn trùng gây
                  hại trên lá. Nhiệt độ từ 18 – 30 độ C là điều kiện tốt nhất
                  giúp cây sinh trưởng ổn định. Không đặt cây trực tiếp dưới
                  luồng gió máy lạnh sẽ làm quá trình thoát hơi nước diễn ra
                  nhanh hơn, độ ẩm của cây sẽ giảm mạnh.
                </span>
              </div>
              <img className="img-1" src={dabupdo11} />
            </div>
          </div>
          <span className="span-9">DINH DƯỠNG</span>
          <span className="span-10">
            Cây cũng như cơ thể con người phải nạp các khoáng chất để tồn tại và
            sinh trưởng khỏe mạnh. Sau một thời gian, chất dinh dưỡng trong đất
            không đủ đáp ứng nhu cầu của cây nữa. Hãy tăng cường bón phân với
            tần suất 1 lần/tháng để cung cấp dưỡng chất cần thiết cho cây. Thời
            điểm bón phân tốt nhất là những ngày thời tiết ấm áp, dễ chịu.
          </span>
          <span className="span-11">ĐỘC TÍNH</span>
          <span className="span-12">
            Lá cây Đa Búp Đỏ chứa độc tố nhẹ đối với con người và thú cưng. Nếu
            để vật nuôi ăn phải lá cây sẽ gây kích ứng miệng chúng.
          </span>
        </div>
      </div>
    </div>
    </Wrapper>
    

</main>
  )
}
const Wrapper = styled.section`
.div-2 {
	 display: flex;
	 background-color: #ffffff;
	 min-height: 770px;
	 flex-direction: column;
	 max-width: 1519px;
	 align-items: center;
	 width: 100%;
	 padding-top: 34px;
	 padding-left: 64px;
	 height: 100%;
	 padding-bottom: 39px;
	 justify-content: flex-start;
	 padding-right: 64px;
	 row-gap: 34px;
}.span-1 {
	 font-weight: 400;
	 flex-basis: 44px;
	 font-size: 36px;
	 color: #93cf92;
	 line-height: 42px;
}
.div-3 {
	 display: flex;
	 line-height: 17px;
	 flex-direction: column;
	 margin-right: 0px;
	 color: #000000;
	 margin-bottom: 0px;
	 font-size: 15px;
	 margin-top: 0px;
	 row-gap: 11px;
	 align-items: start;
	 font-weight: 700;
	 justify-content: space-between;
	 margin-left: 0px;
	 height: 80%;
	 flex-basis: 619px;
}.div-4 {
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 align-items: center;
	 width: 100%;
	 margin-bottom: 0px;
	 height: 70%;
	 justify-content: flex-start;
	 margin-top: 0px;
	 margin-left: 0px;
	 flex-basis: 449px;
}.span-2 {
	 flex-basis: 54px;
	 font-weight: 400;
}
.div-5 {
	 display: flex;
	 margin-right: 0px;
	 margin-left: 0px;
	 width: 100%;
	 column-gap: 27px;
	 margin-bottom: 0px;
	 align-items: end;
	 justify-content: flex-start;
	 margin-top: 0px;
	 flex-basis: 395px;
	 height: 80%;
	 flex-direction: row;
}.div-6 {
	 display: flex;
	 flex-direction: column;
	 margin-right: 0px;
	 row-gap: 10px;
	 margin-bottom: 0px;
	 margin-top: 0px;
	 flex-basis: 736px;
	 height: 100%;
	 align-items: start;
	 justify-content: space-between;
	 margin-left: 0px;
}.span-3 {
	 flex-basis: 18px;
}
.span-4 {
	 margin-right: 0px;
	 font-weight: 400;
	 margin-bottom: 0px;
	 margin-left: 20px;
	 margin-top: 0px;
	 flex-basis: 108px;
}
.span-5 {
	 flex-basis: 16px;
}
.span-6 {
	 margin-right: 0px;
	 flex-basis: 54px;
	 font-weight: 400;
	 margin-bottom: 0px;
	 margin-left: 22px;
	 margin-top: 0px;
}
.span-8 {
	 margin-right: 0px;
	 font-weight: 400;
	 margin-bottom: 0px;
	 margin-left: 22px;
	 flex-basis: 72px;
	 margin-top: 0px;
}
.img-1 {
	 height: 388px;
	 margin-right: 0px;
	 width: 362px;
	 margin-bottom: 7px;
	 flex-basis: 362px;
	 margin-top: 0px;
	 margin-left: 0px;
}
.span-9 {
	 margin-left: 0px;
	 margin-right: 0px;
	 margin-bottom: 0px;
	 flex-basis: 18px;
	 margin-top: 0px;
}
.span-10 {
	 margin-right: 0px;
	 margin-left: 22px;
	 font-weight: 400;
	 margin-bottom: 0px;
	 flex-basis: 63px;
	 margin-top: 0px;
}
.span-11 {
	 margin-right: 0px;
	 margin-left:0px;
	 flex-basis: 16px;
	 margin-bottom: 0px;
	 margin-top: 0px;
}
.span-12 {
	 margin-right: 0px;
	 margin-left: 22px;
	 font-weight: 400;
	 margin-bottom: 0px;
	 flex-basis: 18px;
	 margin-top: 0px;
}
`
export default DetailsBlog3