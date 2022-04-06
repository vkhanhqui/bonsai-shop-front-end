import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Modal, Select } from "antd";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Upload, notification } from "antd";

import "antd/dist/antd.css";
import axios from "axios";
import getAddress from "../context/get_address_context";
import Add_address from "../pages/AddAddress";


const CartTotals = () => {
  const { total_amount, shipping_fee, cart, clearCart } = useCartContext();
  // const { myUser, loginWithRedirect } = useUserContext();
  const history = useHistory();
  const [address, setAddress] = useState([]);
  const [orderAddress, setOrderAddress] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [token, setToken] = useState("");
  const { Option } = Select;

  useEffect(() => {
    async function fetchData() {
      const username = "string";
      const password = "stringst";
      const fetchTokenData = await axios.post(
        "http://localhost:8000/bonsai-backend/login/token",
        {
          body: JSON.stringify(
            `grant_type&username=${username}&password=${password}&scope&client_secret=`
          ),
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setToken(fetchTokenData.data.access_token);
      const res = await axios.get(
        "http://localhost:8000/bonsai-backend/addresses/get-all-addresses",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("resne", res.data);
      setAddress(res.data);
    }
//


    //
    fetchData();
  }, [isModalVisible]);

  const showModal = () => {
    // console.log("cart", cart);

    setIsModalVisible(true);
  };
  const showModal1 =()=>{
    setIsModalVisible1(true);
  }
  useEffect(() => {
    async function fetchData() {
      const arrayItem = cart.map((item) => {
        return { number_product: item.amount, product_id: item.id };
      });
      console.log("array", arrayItem);
      const res = await axios.post(
        "http://localhost:8000/bonsai-backend/customers/confirm-bill",

        { address_id: orderAddress, items: arrayItem },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("ketqua", res.data);
      clearCart();
      history.push("/");
      // setAddress(res.data);
    }
    fetchData();
  }, [isModalVisible]);
  const handleOk = () => {
    setIsModalVisible(false);
    // setConfirmBill(true);
  };
  const handleOk1 = ()=> {
    setIsModalVisible1(false);
    this.SaveNew();
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancel1 = ()=>{
    setIsModalVisible1(false);

  }
  function onChange(value) {
    setOrderAddress(value);
    console.log(`selected ${value}`);
  }

  function onSearch(val) {
    console.log("search:", val);
  }


//-------------------

//-------------------------------------
  return (
    <>
      <Wrapper>
        <div>
          <article>
            {/* <h5>
              subtotal :<span>{formatPrice(total_amount)}</span>
            </h5>
            <p>
              shipping fee :<span>{formatPrice(shipping_fee)}</span>
            </p>
            <hr /> */}
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
            order
          </button>
        </div>
      </Wrapper>
      <>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}

          onCancel={handleCancel}
        >
          <p>Some contents... </p>
          <button className="btn" onClick={showModal1}>
            Add Address
          </button>
          <p></p>
          <createAddress/>

          <Select
            showSearch
            placeholder="Select a address"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}

            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <getAddress />
            {address.map((value) => {
              return (
                <Option key={value.address_id} value={value.address_id}>
                  {value.full_address},{value.district},{value.city}
                </Option>
              );
            })}
          </Select>
          ,
        </Modal>
        <Modal
          title="Add Address"
          visible={isModalVisible1}
          onOk={handleOk1}

          onCancel={handleCancel1}
        >
         <Add_address />
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
  fname{
    color: red;
  }
`;

export default CartTotals;
