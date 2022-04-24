import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import { formatPrice } from "../utils/helpers";
import getBills from "../context/get_bills_context";
import adminConfirmBill from "../context/admin_confirm_bill";

const BillPage = () => {
  const [bills, setBills] = useState([]);

  const handleBillStatus = (bill_status) => {
    if (bill_status === "Customer confirmed") {
      return "Đơn hàng mới";
    } else if (bill_status === "Admin confirmed") {
      return "Đã duyệt";
    }
  };

  const handleConfirm = async (bill_id) => {
    adminConfirmBill(localStorage.getItem("token"), bill_id).then((res) => {
      getBills(localStorage.getItem("token")).then((res) => setBills(res));
    });

  };

  const handleConfirmBill = (record) => {
    if (record.bill_status === "Admin confirmed") {
      return (
        <Link
          to={{
            pathname: "/get-bill-detail",
            state: {
              bill_managements: record.bill_managements,
              total_price: record.total_price
            },
          }}
        >
          <p>Xem chi tiết</p>
        </Link>
      );
    } else if (record.bill_status === "Customer confirmed") {
      return (
        <Link onClick={() => handleConfirm(record.bill_id)}>
          <p>Xác nhận đơn hàng</p>
        </Link>
      );
    }
  };

  useEffect(() => {
    getBills(localStorage.getItem("token")).then((res) => setBills(res));
  }, []);

  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "stt",
      key: "stt",
      align: "center",
    },
    {
      title: "Khách hàng",
      dataIndex: "customer",
      key: "customer",
      align: "center",
      render: (text, record) =>
        `${record.customer.last_name} ${record.customer.first_name}`,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
      render: (text, record) => `${record.customer.email}`,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      key: "phone",
      align: "center",
      render: (text, record) => `${record.phone_number}`,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      align: "center",
      render: (text, record) =>
        `${record.full_address}, ${record.district}, ${record.city}`,
    },
    {
      title: "Tổng cộng",
      dataIndex: "total_price",
      key: "total_price",
      align: "center",
      render: (text, record) => formatPrice(record.total_price),
    },
    {
      title: "Trạng thái",
      dataIndex: "bill_status",
      key: "bill_status",
      align: "center",
      render: (text, record) => handleBillStatus(record.bill_status),
    },
    {
      title: "Thao tác",
      dataIndex: "bill_status",
      align: "center",
      key: "action",
      render: (text, record) => handleConfirmBill(record),
    },
  ];
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
                marginLeft: "-50px",
                marginTop: "-50px",
                padding: "20px",
              }}
            >
              Quản Lý Đơn Hàng
            </h2>
            <div className="underline"></div>
          </div>
         
          <Table
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
export default BillPage;
