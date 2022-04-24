import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import getStaffs from "../context/get_staffs_context";
import getBillCustomer from "../context/get_bill_customer";
import getBills from "../context/get_bills_context";

import { useLocation } from "react-router-dom";
import GetBillDetail from "../context/get_detailBill_context";
const CustomerManageBill= () => {
  const [bills, setBills] = useState([]);
  const data = useLocation().state;

  useEffect(() => {
    getBillCustomer(localStorage.getItem("token")).then((res) => setBills(res));

  }, []);
  const onChange = (e) => {

   bills.bills?.map((obj) => ({ ...obj, key: obj.bill_id}));

  };

  const handleConfirmBill = (record) => {
      return (
        <Link
          to={{
            pathname: "/detail-bill",
            state: {

              bill_id: record.bill_id,
            },
          }}
        >
          <p>Xem chi tiết</p>
        </Link>
      );

  };
  const handleRating = (record) => {
    return (
      <Link
          to={{
            pathname: "/rating",
            state: {
              bill_id: record.bill_id
            },
          }}
        >
          <p>Đánh giá</p>
        </Link>
    )
  }

  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "stt",
      key: "stt",
      align: "center",
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "bill_status",
      key: "bill_status",
      align: "center",
    },
    {
      title: "Thời gian đặt hàng",
      dataIndex: "created_at",
      key: "created_at",
      align: "center",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => handleConfirmBill(record),
      },
      {
        key: "action",
        render: (text, record) => handleRating(record),},
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
             LỊCH SỬ ĐẶT HÀNG
            </h2>
            <div className="underline"></div>
          </div>

          <Table
            onChange={onChange}
            dataSource={bills}
            columns={columns}
            pagination={{ defaultPageSize: 10 }}
          />
          ;
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
export default CustomerManageBill

