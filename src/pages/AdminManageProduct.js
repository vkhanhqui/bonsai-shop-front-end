import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import getProducts from "../context/products_filter";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import { formatPrice } from "../utils/helpers";

const AdminManageProduct = () => {
  const [products, setProducts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts(0, "", "", "", currentPage, 10).then((res) => setProducts(res));
  }, [0, "", "", "", currentPage, 10]);
  let data_products = products.products?.map((obj) => ({
    ...obj,
    key: obj.product_id,
  }));

  const onChange = (e) => {
    setCurrentPage(e.current);
    products.products?.map((obj) => ({ ...obj, key: obj.product_id }));
  };

  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "stt",
      key: "stt",
      align: "center",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "product_name",
      key: "product_name",
      align: "center",
    },
    {
      title: "Giá",
      dataIndex: "product_price",
      key: "product_price",
      align: "center",
      render: (text, record) => formatPrice(record.product_price),
    },
    // {
    //   title: "Description",
    //   dataIndex: "description",
    //   key: "description",
    //   align: "center",
    // },
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
          src={`${record.images[0].image_path}`}
          alt={`${record.images[0].image_path}`}
        />
      ),
    },
    {

      key: "action",
      render: (text, record) => (
         <Link
         to={{
           pathname: "/mod-product",
           state:{
             product_id: record.product_id,
             product_name: record.product_name,
             product_price: record.product_price,
             description: record.description,
             category_id: record.category_id,
             images: record.images,
           }
         }}
       >
         Sửa
       </Link>
      ),
    },
    {

      key: "action",
      render: (text, record) => (
         <Link
         to={{
           pathname: "/del-product",
           state:{
             product_id: record.product_id,
             product_name: record.product_name,
             product_price: record.product_price,
             description: record.description,
             category_id: record.category_id,
             images: record.images,
           }
         }}
       >
         Xóa
       </Link>
      ),
    },

  ];
  return (
    <main>
      <AdminHeader />
      <Wrapper className="page section section-center">
        <AdminMenu />
        <article>
          <div className="title"
          style={{ marginLeft: 50 }}
          >
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
              Quản Lý Sản Phẩm
            </h2>
            <div className="underline"></div>
          </div>
          <Button
            type="primary"
            size="large"
            style={{ marginLeft: "900px", marginBottom: "20px" }}
          >
            <Link to="add-product">Thêm mới</Link>
          </Button>
          <Table
            onChange={onChange}
            dataSource={data_products}
            columns={columns}
            pagination={{ defaultPageSize: 10, total: products.total }}
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
export default AdminManageProduct;
