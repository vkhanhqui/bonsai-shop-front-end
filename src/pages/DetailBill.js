import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Select, Input, Button, Upload, notification } from "antd";
import getCategories from "../context/category_context";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import { formatPrice } from "../utils/helpers";
import { useLocation } from "react-router-dom";
import GetBillDetail from "../context/get_detailBill_context";
import AmountButtons from "../components/AmountButtons";
const { Option } = Select;

const normFile = (e) => {
  // console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const AdmingetBill = (
  {id, image, name, color, price, amount}
) => {
  const data = useLocation().state;
  const [form] = Form.useForm();
 
  const [bills, setBills] = useState([]);
  useEffect(() => {
    GetBillDetail(localStorage.getItem("token")).then((res) => setBills(res));
  }, []);


  return (
    <main>
      <AdminMenu/>
      <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          {/* <p className='color'>
            color :
            <span style={{ background: color }} />
          </p> */}
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} 
      // increase={increase} decrease={decrease}
       />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      {/* <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button> */}
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
    margin: 0 auto;
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
export default AdmingetBill;
