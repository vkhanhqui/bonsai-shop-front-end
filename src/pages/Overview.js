import React from "react";
import styled from "styled-components";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import Chart from "../components/Chart"
import Charts from "../components/PieCharts"

const Overview = () => {

  return (
    <main>
      <AdminHeader />
      <Wrapper className="page section section-center">
        <AdminMenu />
        <article>
          <div className="title" style={{ marginLeft: 50 }}>
            <h2
              style={{
                background: "#CFAF92",
                width: "1000px",
                height: "70px",
                marginLeft: "-70px",
                marginTop: "-50px",
                padding: "20px",
              }}
            >
              Tổng quan
            </h2>
            <div className="underline"></div>
          </div>
          <p>DOANH THU</p>
          <Chart />
          <p>LOẠI SẢN PHẨM</p>
          <Charts />
          <p>
            Green Life là một dự án nhỏ cung cấp cho cộng đồng yêu cây cảnh, yêu
            thích những không gian xanh, sạch. Tại website này, bạn sẽ tìm thấy
            những thông tin về sản phẩm, dịch vụ chăm sóc tinh thần của bạn,
            chúng tôi luôn mang đến những sự chỉn chu trong từng sản phẩm. Green
            Life không chỉ là một cửa hàng cây cảnh, mà còn là nơi dừng chân sau
            những xô bồ của cuộc sống vội vã Nếu bạn yêu thích sự nhẹ nhàng,
            sang trọng, đơn giản, Đừng ngần ngại hãy liên hệ với Green Life, hãy
            để chúng tôi quan tâm đến bạn. Green Life xin cảm ơn sự đồng hành và
            tin tưởng của quý khách trong thời gian vừa qua.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      top: 100px;
      width: 400px;
      margin-left: 20px;
    }
  }
  h2 {
    font-family: "Courier New", BrushScript, monospace;
    color: hsl(22, 47%, 19%);

  }

  p {
    line-height: 2;
    font-size: 20px;
    max-width: 45em;
    ${"" /* margin-left:-150px; */}
    text-align: left;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
    margin-bottom: 30px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default Overview;
