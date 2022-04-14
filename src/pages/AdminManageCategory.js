import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import getCategories from "../context/category_context";

const AdminManageCategory = () => {
  const [categories, setCategories] = useState([]);
  
  
  useEffect(() => {
    getCategories(localStorage.getItem("token")).then((res) => setCategories(res));
    
  }, []);
  const onChange = (e) => {
    
    categories.categories?.map((obj) => ({ ...obj, key: obj.category_id }));
  };
  const columns = [
    {
      title: "Số thứ tự",
      dataIndex: "stt",
      key: "stt",
      align: "center",
    },
    {
      title: "Tên loại",
      dataIndex: "category_name",
      key: "category_name",
      align: "center",
    },
    {
      key: "action",
      render: (text, record) => (
        <Link
          to={{
            pathname: "/mod-category",
            state:{
              category_id: record.category_id,
            }
          }}
        >
          Sửa
        </Link>
      ),},
    
    {
      key: "action",
      render: (text, record) => (
        <Link
          to={{
            pathname: "/del-category",
            state:{
              category_id: record.category_id,
            }
          }}
        >
          Xóa
        </Link>
      ),}
    
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
              Quản Lý Loại Sản Phẩm
            </h2>
            <div className="underline"></div>
          </div>
          <Button
            type="primary"
            size="large"
            style={{ marginLeft: "900px", marginBottom: "20px" }}
          >
            <Link to="add-category">Thêm mới</Link>
          </Button>
          <Table
            onChange={onChange}
            dataSource={categories}
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
export default AdminManageCategory;
