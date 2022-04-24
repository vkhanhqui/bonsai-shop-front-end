import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import exportBill from "../context/export_bill";
const ExportBill = () => {
  const [bill, setBill] = useState(false);
  const search = useLocation().search;
  const bill_id = new URLSearchParams(search).get("bill_id");

  useEffect(() => {
    exportBill(bill_id).then((res) => setBill(res));
  }, []);

  return (
    bill && (
      <Wrapper>
        <div className="main">
          <header>
            <h1>Hoá đơn từ GreenLife</h1>
            <span>
              <img
                alt=""
                src="http://www.jonathantneal.com/examples/invoice/logo.png"
              />
            </span>
          </header>

          <article>
            <address contenteditable>
              <p>
                Khách hàng: {bill.customer.first_name} {bill.customer.last_name}
              </p>
              <p>Địa chỉ: {bill.full_address}</p>
              <p>Số điện thoại: {bill.phone_number}</p>
              <p>Email: {bill.customer.email}</p>
            </address>
            <table class="meta">
              <tr>
                <th>
                  <span contenteditable>ID #</span>
                </th>
                <td>
                  <span contenteditable>{bill.bill_id}</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contenteditable>Ngày tạo</span>
                </th>
                <td>
                  <span contenteditable>{bill.created_at}</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span contenteditable>Tổng thanh toán</span>
                </th>
                <td>
                  <span>{formatPrice(bill.total_price)}</span>
                </td>
              </tr>
            </table>
            <table class="inventory">
              <thead>
                <tr>
                  <th>
                    <span contenteditable>STT</span>
                  </th>
                  <th>
                    <span contenteditable>Tên sản phẩm</span>
                  </th>
                  <th>
                    <span contenteditable>Giá</span>
                  </th>
                  <th>
                    <span contenteditable>Số lượng</span>
                  </th>
                  <th>
                    <span contenteditable>Tổng</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {bill.bill_managements.map((products, index) => {
                  return (
                    <tr>
                      <td>
                        <span contenteditable>{index + 1}</span>
                      </td>
                      <td>
                        <span contenteditable>{products.product_name}</span>
                      </td>
                      <td>
                        <span contenteditable>
                          {formatPrice(products.product_price)}
                        </span>
                      </td>
                      <td>
                        <span contenteditable>{products.number_product}</span>
                      </td>
                      <td>
                        <span>{formatPrice(products.product_price*products.number_product)}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </article>
          <aside>
            <h1>
              <span contenteditable>Cảm ơn bạn đã mua hàng</span>
            </h1>
          </aside>
        </div>
      </Wrapper>
    )
  );
};
const Wrapper = styled.section`
  /* reset */

  * {
    border: 0;
    box-sizing: content-box;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    vertical-align: top;
  }
  .main {
    padding-top: 50px;
    max-width: 793px;
    min-width: 793px;
    max-height: 440px;
    min-height: 440px;
    margin: auto;
  }
  /* content editable */

  *[contenteditable] {
    border-radius: 0.25em;
    min-width: 1em;
    outline: 0;
  }

  *[contenteditable] {
    cursor: pointer;
  }

  *[contenteditable]:hover,
  *[contenteditable]:focus,
  td:hover *[contenteditable],
  td:focus *[contenteditable],
  img.hover {
    background: #def;
    box-shadow: 0 0 1em 0.5em #def;
  }

  span[contenteditable] {
    display: inline-block;
  }

  /* heading */

  h1 {
    font: bold 100% sans-serif;
    letter-spacing: 0.5em;
    text-align: center;
    text-transform: uppercase;
  }

  /* table */

  table {
    font-size: 75%;
    table-layout: fixed;
    width: 100%;
  }
  table {
    border-collapse: separate;
    border-spacing: 2px;
  }
  th,
  td {
    border-width: 1px;
    padding: 0.5em;
    position: relative;
    text-align: left;
  }
  th,
  td {
    border-radius: 0.25em;
    border-style: solid;
  }
  th {
    background: #eee;
    border-color: #bbb;
  }
  td {
    border-color: #ddd;
  }

  /* page */

  html {
    font: 16px/1 "Open Sans", sans-serif;
    overflow: auto;
    padding: 0.5in;
  }
  html {
    background: #999;
    cursor: default;
  }

  body {
    box-sizing: border-box;
    height: 11in;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5in;
    width: 8.5in;
  }
  body {
    background: #fff;
    border-radius: 1px;
    box-shadow: 0 0 1in -0.25in rgba(0, 0, 0, 0.5);
  }

  /* header */

  header {
    margin: 0 0 3em;
  }
  header:after {
    clear: both;
    content: "";
    display: table;
  }

  header h1 {
    background: #000;
    border-radius: 0.25em;
    color: #fff;
    margin: 0 0 1em;
    padding: 0.5em 0;
  }
  header address {
    float: left;
    font-size: 75%;
    font-style: normal;
    line-height: 1.25;
    margin: 0 1em 1em 0;
  }
  header address p {
    margin: 0 0 0.25em;
  }
  header span,
  header img {
    display: block;
    float: right;
  }
  header span {
    margin: 0 0 1em 1em;
    max-height: 25%;
    max-width: 60%;
    position: relative;
  }
  header img {
    max-height: 100%;
    max-width: 100%;
  }
  header input {
    cursor: pointer;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  /* article */

  article,
  article address,
  table.meta,
  table.inventory {
    margin: 0 0 3em;
  }
  article:after {
    clear: both;
    content: "";
    display: table;
  }
  article h1 {
    clip: rect(0 0 0 0);
    position: absolute;
  }

  article address {
    float: left;
    font-size: 125%;
    font-weight: bold;
  }

  /* table meta & balance */

  table.meta,
  table.balance {
    float: right;
    width: 36%;
  }
  table.meta:after,
  table.balance:after {
    clear: both;
    content: "";
    display: table;
  }

  /* table meta */

  table.meta th {
    width: 40%;
  }
  table.meta td {
    width: 60%;
  }

  /* table items */

  table.inventory {
    clear: both;
    width: 100%;
  }
  table.inventory th {
    font-weight: bold;
    text-align: center;
  }

  table.inventory td:nth-child(1) {
    width: 26%;
  }
  table.inventory td:nth-child(2) {
    width: 38%;
  }
  table.inventory td:nth-child(3) {
    text-align: right;
    width: 12%;
  }
  table.inventory td:nth-child(4) {
    text-align: right;
    width: 12%;
  }
  table.inventory td:nth-child(5) {
    text-align: right;
    width: 12%;
  }

  /* table balance */

  table.balance th,
  table.balance td {
    width: 50%;
  }
  table.balance td {
    text-align: right;
  }

  /* aside */

  aside h1 {
    border: none;
    border-width: 0 0 1px;
    margin: 0 0 1em;
  }
  aside h1 {
    border-color: #999;
    border-bottom-style: solid;
  }

  /* javascript */

  .add,
  .cut {
    border-width: 1px;
    display: block;
    font-size: 0.8rem;
    padding: 0.25em 0.5em;
    float: left;
    text-align: center;
    width: 0.6em;
  }

  .add,
  .cut {
    background: #9af;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background-image: -moz-linear-gradient(#00adee 5%, #0078a5 100%);
    background-image: -webkit-linear-gradient(#00adee 5%, #0078a5 100%);
    border-radius: 0.5em;
    border-color: #0076a3;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    text-shadow: 0 -1px 2px rgba(0, 0, 0, 0.333);
  }

  .add {
    margin: -2.5em 0 0;
  }

  .add:hover {
    background: #00adee;
  }

  .cut {
    opacity: 0;
    position: absolute;
    top: 0;
    left: -1.5em;
  }
  .cut {
    -webkit-transition: opacity 100ms ease-in;
  }

  tr:hover .cut {
    opacity: 1;
  }

  @media print {
    * {
      -webkit-print-color-adjust: exact;
    }
    html {
      background: none;
      padding: 0;
    }
    body {
      box-shadow: none;
      margin: 0;
    }
    span:empty {
      display: none;
    }
    .add,
    .cut {
      display: none;
    }
  }

  @page {
    margin: 0;
  }
`;

export default ExportBill;
