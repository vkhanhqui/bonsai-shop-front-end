import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Modal, Select } from "antd";
import { useHistory } from "react-router-dom";

import "antd/dist/antd.css";
import axios from "axios";

const CartTotals = () => {
  const { total_amount, cart, clearCart } = useCartContext();
  // const { myUser, loginWithRedirect } = useUserContext();
  const history = useHistory();
  const [address, setAddress] = useState([]);
  const [orderAddress, setOrderAddress] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Option } = Select;

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "http://localhost:8000/bonsai-backend/addresses/get-all-addresses",
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      setAddress(res.data);
    }
    fetchData();
  }, [isModalVisible]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    async function fetchData() {
      const arrayItem = cart.map((item) => {
        return { number_product: item.amount, product_id: item.id };
      });
      console.log("array", arrayItem);
      const res = await axios.post(
        "http://localhost:8000/bonsai-backend/customers/confirm-bill",

        { address_id: orderAddress, items: arrayItem },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      console.log("ketqua", res.data);
      clearCart();
      history.push("/");
    }
    fetchData();
  }, [isModalVisible]);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function onChange(value) {
    setOrderAddress(value);
  }

  return (
    <>
      <Wrapper>
        <div>
          <article>
            <h5>
              subtotal :<span>{formatPrice(total_amount)}</span>
            </h5>
            {/* <p>
              shipping fee :<span>{formatPrice(shipping_fee)}</span>
            </p> */}
            <hr />
            <h4>
              order total :
              <span>{formatPrice(total_amount)}</span>
            </h4>
          </article>
          {/* {myUser ? ( */}
          {/* <Link to="/checkout" className="btn">
      proceed to checkout
    </Link> */}
          {/* ) : (
      <button onClick={loginWithRedirect} className="btn">
        login11
      </button>
    )} */}
          <button className="btn" onClick={showModal}>
            Payment
          </button>
        </div>
      </Wrapper>
      <>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Danh sách địa chỉ</p>
          <Select
            showSearch
            placeholder="Select a person"
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
`;

export default CartTotals;
