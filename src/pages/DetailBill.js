import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import { formatPrice } from "../utils/helpers";
import getBills from "../context/get_bills_context";
import adminConfirmBill from "../context/admin_confirm_bill";
import AmountButtons from "../components/AmountButtons";
import { useCartContext } from "../context/cart_context";
import { useProductsContext } from "../context/products_context";
import GetBillDetail from "../context/get_detailBill_context"
const DetailBill = ( id, image, name, price, amount) => {
  const [bills,setBills] = useState([]);
  const { product } = useProductsContext();
  const { total_amount, cart, clearCart } = useCartContext();
  const handleBillStatus = (bill_status) => {
    if (bill_status === "Customer confirmed") {
      return "Đơn hàng mới";
    } else if (bill_status === "Admin confirmed") {
      return "Đã duyệt";
    }
  };

  const handleConfirm = async (bill_id) => {
    GetBillDetail(localStorage.getItem("token"), bill_id).then((res) => {
      getBills(localStorage.getItem("token")).then((res) => setBills(res));
    });

  };

  const handleConfirmBill = (record) => {
    if (record.bill_status === "Admin confirmed") {
      return (
        <Link
          to={{
            pathname: "/detail-bill/",
            state: {
              bill_id: record.bill_id,
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
  const response = GetBillDetail(

  );

    const columns = [
      {
        title: "Số Thứ Tự",
        dataIndex: "stt",
        key: "stt",
        align: "center",
      },
      {
        title: "Sản Phẩm",
        dataIndex: "customer",
        key: "customer",
        align: "center",

      },
      {
        title: "Giá",
        dataIndex: "total_price",
        key: "total_price",
        align: "center",

      },
      {
        title: "Số Lượng",
        dataIndex: "total_price",
        key: "total_price",
        align: "center",

      },

      {
        title: "Tổng cộng",
        dataIndex: "total_price",
        key: "total_price",
        align: "center",

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

          <Table
           // dataSource={bills}
            columns={columns}
            pagination={{ defaultPageSize: 10 }}
          />
          <div>
          <h4>
          Tổng cộng :<span>{formatPrice(total_amount)}</span>
            </h4>
            <h4>
              Method Payment :<span>{"......"}</span>
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
export default DetailBill;
