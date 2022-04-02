import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Menu, Table, Button } from "antd";
import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useProductsContext } from "../context/products_context";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import getProducts from "../context/products_filter";

const ManagerProduct = () => {
  const { closeSidebar } = useProductsContext();
  const { SubMenu } = Menu;
  const [products, setProducts] = useState([]);

  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const Logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

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
      <div
        className="nav-header"
        style={{ width: "100%", backgroundColor: "#8FBC8F", height: 150 }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="Green Life"
            style={{
              marginTop: -80,
              height: 250,
              marginLeft: 70,
            }}
          />
        </Link>
        {localStorage.getItem("token") ? (
          <button
            type="button"
            className="auth-btn"
            onClick={Logout}
            style={{
              "font-size": 27,
              color: "black",
              marginLeft: 770,
              backgroundColor: "#8FBC8F",
              border: "none",
            }}
          >
            {localStorage.getItem("username")} <FaUserMinus />
          </button>
        ) : (
          <Link
            to="/login"
            className="cart-btn"
            onClick={closeSidebar}
            style={{ "font-size": 27, color: "black", marginLeft: 770 }}
          >
            Login <FaUserPlus />
          </Link>
        )}
      </div>
      <Wrapper className="page section section-center">
        <Menu
          mode="inline"
          // theme="dark"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 500,
            height: 600,
            marginLeft: -215,
            marginTop: -80,
            marginRight: -50,
            marginBottom: -80,
          }}
          className="menu"
        >
          <Menu.Item key="sub1" icon={<MailOutlined />} title="Tổng quan">
            Tổng quan
          </Menu.Item>
          <Menu.Item
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Quản Lý Đơn Hàng"
          >
            Quản Lý Đơn Hàng
          </Menu.Item>
          <Menu.Item
            key="sub4"
            icon={<SettingOutlined />}
            title="Quản Lý Sản Phẩm"
          >
            Quản Lý Sản Phẩm
          </Menu.Item>
          <Menu.Item
            key="sub5"
            icon={<SettingOutlined />}
            title="Quản Lý Loại Sản Phẩm"
          >
            Quản Lý Loại Sản Phẩm
          </Menu.Item>
          <Menu.Item
            key="sub6"
            icon={<SettingOutlined />}
            title="Quản Lý Nhân Viên"
          >
            Quản Lý Nhân Viên
          </Menu.Item>
        </Menu>
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
