import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import getProducts from "../context/products_filter";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";

const ManagerProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "product_id",
      key: "product_id",
      align: "center",
    },
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
      align: "center",
    },
    {
      title: "Product price",
      dataIndex: "product_price",
      key: "product_price",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
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
          <Table dataSource={products} columns={columns} />;
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
export default ManagerProduct;
