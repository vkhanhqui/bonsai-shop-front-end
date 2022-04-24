import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Select, Input, Button, Upload, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import getCategories from "../context/category_context";
import createProduct from "../context/create_product_context";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import createCategory from "../context/create_category"
import { Link, useHistory } from "react-router-dom";
const { Option } = Select;

const normFile = (e) => {
  // console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const AdminAddCategory = () => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Thêm Loại Sản Phẩm Thành Công !!!",
      description:
        "Loại sản phẩm đã được thêm thành công. Bỏ qua thông báo này để tiếp tục !!",
    });
  };
  const errorNotfication = (type) => {
    notification[type]({
      message: "Thêm Loại Sản Phẩm Thất Bại!!!",
      description:
        "Loại sản phẩm đã được thêm thất bại. Bỏ qua thông báo này để tiếp tục !!",
    });
  };

  const onFinish = async (values) => {
    const category_name = values.category_name
    try {
      const response = createCategory(
        category_name
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
            <h2> THÊM LOẠI SẢN PHẨM </h2> <div className="underline"> </div>
          </div>
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
              <Form.Item label="Tên Loại Sản Phẩm" name="category_name">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Thêm
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
export default AdminAddCategory;
