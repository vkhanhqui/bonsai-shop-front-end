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
import deleteProduct from "../context/delete_product";
import deleteCategory from "../context/delete_category";
import { Link, useHistory } from "react-router-dom";
const { Option } = Select;

const normFile = (e) => {
  // console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const AdminDeleteCategory = () => {
  const data = useLocation().state;
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Xóa loại sản phẩm thành công",
      description:
        "Loại sản phẩm đã được xóa thành công. Bỏ qua thông báo này để tiếp tục !!",
    });
  };
  const errorNotfication = (type) => {
    notification[type]({
      message: "Xóa Loại Sản Phẩm Thất Bại!!!",
      description:
        "Loại sản phẩm đã được xóa thất bại. Bỏ qua thông báo này để tiếp tục !!",
    });
  };

  const onFinish = async (values) => {
    const category_id = values.category_id;
    
    try {
      
      const response = deleteCategory(
        category_id
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
            <h2> XOÁ LOẠI SẢN PHẨM </h2> <div className="underline"> </div>
          </div>
          <div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{
                remember: true,
              
                category_id: data.category_id,
                
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ marginLeft: -300 }}
              form={form}
            >
              <Form.Item label="Mã loại sản phẩm" name="category_id" >
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
              
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                 Xóa
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
export default AdminDeleteCategory;
