import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "antd";
import { useLocation, Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import GetBillDetail from "../context/get_detailBill_context"

const DetailBill = () => {
  const data = useLocation().state;
  const [bills, setBills] = useState([]);
  const bill_id = data.bill_id;
  const products = bills.products;
  const bill_total = bills.bill_total;
  useEffect(() => {
    GetBillDetail(bill_id).then((res) => setBills(res));
  }, []);

  const calculatePrice = (price, number) => {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "VND",
    }).format(price * number);
  };
  const columns = [

    {
      title: "Sản Phẩm",
      dataIndex: "product_name",
      key: "product_name",
      align: "center",

    },

    {
      title: "Giá",
      dataIndex: "product_price",
      key: "product_price",
      align: "center",
      render: (text, record) =>
        calculatePrice(record.product_price, 1),
    },
    {
      title: "Số Lượng",
      dataIndex: "number_product",
      key: "number_product",
      align: "center",

    },
    {
      title: "Tổng cộng",
      dataIndex: "product_price",
      key: "product_price",
      align: "center",
      render: (text, record) =>
        calculatePrice(record.product_price, record.number_product),
    },
    {
      title: "Ảnh",
      key: "images",
      align: "center",
      dataIndex: "images",
      render: (text, record) => (
        <img
          style={{
            width: "100px",
            height: "100px",
          }}
          src={`${record.image_path}`}
          alt={`${record.image_path}`}
        />
      ),
    },
  ];

  return (
    <main>

      <Wrapper className="page section section-center">

        <article>
          <div className="title" style={{ marginLeft: 50 }}>
            <h2
              style={{
                background: "#CFAF92",
                width: "1000px",
                height: "70px",
                marginLeft: "-50px",
                marginTop: "-50px",
                padding: "20px",
              }}
            >
              Chi Tiết Đơn Hàng
            </h2>
            <div className="underline"></div>
          </div>
          <Link to={`/export-bill?bill_id=${bill_id}`}>Xuất hoá đơn</Link>
          <Table dataSource={products} columns={columns} pagination={false} />
          <div style={{
            float: "right",
            padding: "50px"
          }}>
            <h4>
              Tổng cộng : <span>{formatPrice(bill_total)}</span>
            </h4>
          </div>
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
export default DetailBill
