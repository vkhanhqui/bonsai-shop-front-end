import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Modal, Select } from "antd";
import "antd/dist/antd.min.css";
import customerConfirmBill from "../context/customer_confirm_bill";
import Add_address from "../pages/AdminAddAddress";
import getAddresses from "../context/get_all_addresses";
import vnPayment from "../context/vn_payment";
import { Button } from "antd";
const CartTotals = () => {
  const { total_amount, cart, clearCart } = useCartContext();
  const [address, setAddress] = useState([]);
  const [orderAddress, setOrderAddress] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisiblePayment, setIsModalVisiblePayment] = useState(false);
  const { Option } = Select;

  useEffect(() => {
    getAddresses().then((res) => setAddress(res));
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const HandleOk = async () => {
    setIsModalVisible(false);
    setIsModalVisiblePayment(true);
  };

  const HandleOkPayment = async (is_vnpay) => {
    const arrayItem = cart.map((item) => {
      return { number_product: item.amount, product_id: item.id };
    });
    let confirmBillResp = await customerConfirmBill(
      orderAddress,
      arrayItem,
      total_amount
    );
    if (is_vnpay === true) {
      // vnpay
      let payment_url = await vnPayment(
        total_amount,
        parseInt(confirmBillResp.message)
      );
      window.location.href = payment_url;
    }else{
      window.location.href = "http://localhost:3000?isVNPaySuccess=true";
    }
  };
  const handleOk1 = () => {};
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  function onChange(value) {
    setOrderAddress(value);
  }
  const handleCancelConfirmPayment = () => {
    setIsModalVisiblePayment(false);
  };
  return (
    <>
      <Wrapper>
        <div>
          <article>
            <h4>
              Tổng cộng :<span>{formatPrice(total_amount)}</span>
            </h4>
          </article>
          <button className="btn" onClick={showModal}>
            Đặt hàng
          </button>
        </div>
      </Wrapper>
      <>
        <Modal
          title="Danh sách địa chỉ có sẵn"
          visible={isModalVisible}
          onOk={HandleOk}
          onCancel={handleCancel}
        >
          <button className="btn" onClick={showModal1}>
            Hoặc thêm địa chỉ mới
          </button>
          <p></p>
          <Select
            showSearch
            placeholder="Select a address"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {address.map((value) => {
              return (
                <Option key={value.address_id} value={value.address_id}>
                  {value.full_address},{value.district},{value.city}
                </Option>
              );
            })}
          </Select>
        </Modal>
        <Modal
          title="Add Address"
          visible={isModalVisible1}
          // onOk={handleOk1}
          onCancel={handleCancel1}
            footer={null}
>
          <Add_address />
        </Modal>

        <Modal
          title="Chọn phương thức thanh toán"
          visible={isModalVisiblePayment}
          onCancel={handleCancelConfirmPayment}
          footer={[
            <Button
              key="Cancel"
              type="cancel"
              onClick={handleCancelConfirmPayment}
            >
              Thoát
            </Button>,
          ]}
        >
          <button className="btn" onClick={() => HandleOkPayment(false)}>
            Thanh toán COD
          </button>
          <p></p>
          <button className="btn" onClick={() => HandleOkPayment(true)}>
            Thanh toán VNPAY
          </button>
        </Modal>
      </>
    </>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }

  .text_input {
    color: red;
    margin-left: 1000px;
  }
  fname {
    color: red;
  }
`;

export default CartTotals;
