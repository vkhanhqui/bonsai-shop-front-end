import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Select, Input, Button, Upload, Menu, notification } from "antd";

import { FaUserMinus, FaUserPlus } from "react-icons/fa";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { useProductsContext } from "../context/products_context";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import getCategories from "../context/category_context";

const { Option } = Select;

const Admin = () => {
  const { closeSidebar } = useProductsContext();
  const { SubMenu } = Menu;
  const [form] = Form.useForm();
  const history = useHistory();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Thêm Sản Phẩm Thành Công !!!",
      description:
        "Sản phẩm đã được thêm thành công. Bỏ qua thông báo này để tiếp tục !!",
    });
  };
  const errorNotfication = (type) => {
    notification[type]({
      message: "Thêm Sản Phẩm Thất Bại!!!",
      description:
        "Sản phẩm đã được thêm thất bại. Bỏ qua thông báo này để tiếp tục !!",
    });
  };

  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
  const onFinish = async (values) => {
    console.log("Success:", values);
    console.log("S:", values.images);
    const product_name = values.product_name;
    const product_price = values.product_price;
    const category_id = values.category_id;
    const description = values.description;
    const token = localStorage.getItem("token");
    if (!token) {
      errorNotfication("error");
      history.push("/login");
    } else {
      const formData = new FormData();

      for (let i = 0; i < values.image.fileList.length; i++) {
        formData.append("files", values.image.fileList[i].originFileObj);
      }
      const res = axios.post(
        `http://localhost:8000/bonsai-backend/products/create-product?product_name=${product_name}&product_price=${product_price}&category_id=${category_id}&description=${description}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res) {
        form.resetFields();
        openNotificationWithIcon("success");
      } else {
        openNotificationWithIcon("error");
        form.resetFields();
      }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
          />{" "}
        </Link>{" "}
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
            Logout <FaUserMinus />
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
        )}{" "}
      </div>{" "}
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
          </Menu.Item>{" "}
          <Menu.Item
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Quản Lý Đơn Hàng"
          >
            Quản Lý Đơn Hàng
          </Menu.Item>{" "}
          <Menu.Item
            key="sub4"
            icon={<SettingOutlined />}
            title="Quản Lý Sản Phẩm"
          >
            Quản Lý Sản Phẩm
          </Menu.Item>{" "}
          <Menu.Item
            key="sub5"
            icon={<SettingOutlined />}
            title="Quản Lý Loại Sản Phẩm"
          >
            Quản Lý Loại Sản Phẩm
          </Menu.Item>{" "}
          <Menu.Item
            key="sub6"
            icon={<SettingOutlined />}
            title="Quản Lý Nhân Viên"
          >
            Quản Lý Nhân Viên
          </Menu.Item>{" "}
        </Menu>{" "}
        <article>
          <div className="title" style={{ marginLeft: 50 }}>
            <h2> THÊM SẢN PHẨM </h2> <div className="underline"> </div>{" "}
          </div>{" "}
          <div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ marginLeft: -300 }}
              form={form}
            >
              <Form.Item label="Tên Sản Phẩm" name="product_name">
                <Input placeholder="input placeholder" />
              </Form.Item>{" "}
              <Form.Item label="Giá Sản Phẩm" name="product_price">
                <Input placeholder="input placeholder" />
              </Form.Item>{" "}
              <Form.Item label="Loại Sản Phẩm" name="category_id">
                <Select
                  style={{
                    width: 300,
                  }}
                >
                  {categories.map((category) => {
                    return (
                      <Option value={category.category_id}>
                        {category.category_name}
                      </Option>

                      // <button
                      //   key={category.category_id}
                      //   data-key={category.category_id}
                      //   onClick={updateFilters}
                      //   type="button"
                      //   name="category"
                      // >

                      // </button>
                    );
                  })}
                </Select>
              </Form.Item>{" "}
              <Form.Item label="Mô Tả Sản Phẩm" name="description">
                <Input placeholder="input placeholder" />
              </Form.Item>{" "}
              <Form.Item label="Ảnh Sản Phẩm" name="image">
                <Upload
                  action="//jsonplaceholder.typicode.com/posts/"
                  listType="picture"
                  maxCount={3}
                  accept=".jpg,.png,.jpeg"
                  multiple
                >
                  <Button icon={<UploadOutlined />}> Upload(Max: 3) </Button>{" "}
                </Upload>{" "}
              </Form.Item>{" "}
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit{" "}
                </Button>{" "}
              </Form.Item>{" "}
            </Form>{" "}
          </div>{" "}
        </article>{" "}
      </Wrapper>{" "}
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
export default Admin;
