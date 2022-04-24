import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Select, Input, Button, Upload, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import getCategories from "../context/category_context";
import createProduct from "../context/create_product_context";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import { useLocation } from "react-router-dom";
import updateProduct from "../context/update_product"
import updateCategory from "../context/update_category";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "antd/dist/antd.min.css";

const { Option } = Select;

const normFile = (e) => {
  // console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const AdminModCategory = () => {
  const data = useLocation().state;
  const [form] = Form.useForm();
  const history = useHistory();
  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);
  const [categories, setCategories] = useState([]);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Sửa Sản Phẩm Thành Công !!!",
      description:
        "Sản phẩm đã được sửa thành công. Bỏ qua thông báo này để tiếp tục !!",
    });
  };
  const errorNotfication = (type) => {
    notification[type]({
      message: "Sửa Sản Phẩm Thất Bại!!!",
      description:
        "Sản phẩm đã được sửa thất bại. Bỏ qua thông báo này để tiếp tục !!",
    });
  };

  const onFinish = async (value) => {
    const category_id = value.category_id;
    const category_name = value.category_name;
    try {
      const response = updateCategory(
        category_id,
        category_name,

      );
      history.push("/manage-category");
      window.location.reload();
      if (response) {
        form.resetFields();
        openNotificationWithIcon("success");
      } else {
        form.resetFields();
        errorNotfication("error");
      }
    } catch {
      errorNotfication("error");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <main>
      <AdminHeader />
      <Wrapper className="page section section-center">
        <AdminMenu />
        <article>
          <div className="title" style={{ marginLeft: 50 }}>

          </div>
          <div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{
                remember: true,
                category_id: data.category_id,
                category_name : data.category_name
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ marginLeft: -300 }}
              form={form}

            > <h2>CHI TIẾT LOẠI SẢN PHẨM </h2> <div className="underline"> </div>
            <Form.Item label="Mã loại sản phẩm" name="category_id">
              <Input placeholder="input placeholder" required = {true} readOnly = {true}  />
            </Form.Item>
            <Form.Item label="Loại Sản Phẩm" name="category_id">
                <Select
                  style={{
                    width: 300,
                  }}
                  required = {true}
                  readOnly = {true}
                >
                  {categories.map((category) => {
                    return (
                      <Option
                        key={category.category_id}
                        value={category.category_id}
                      >
                        {category.category_name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>

            <h2> SỬA LOẠI SẢN PHẨM </h2> <div className="underline"> </div>
              <Form.Item label="Mã loại sản phẩm" name="category_id">
                <Input placeholder="input placeholder" required = {true} readOnly = {true}  />
              </Form.Item>
              <Form.Item label="Loại Sản Phẩm" name="category_name">
              <Input placeholder="input placeholder" />

              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Sửa
                </Button>
              </Form.Item>
            </Form>
          </div>
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
export default AdminModCategory;
