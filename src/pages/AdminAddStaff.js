import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Form, Select, Input, Button, Upload, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import getCategories from "../context/category_context";
import createProduct from "../context/create_product_context";
import AdminHeader from "../components/admin_header";
import AdminMenu from "../components/admin_menu";
import createStaff from "../context/create_staff";
import { Link, useHistory } from "react-router-dom";
const { Option } = Select;

const normFile = (e) => {
  // console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const AdminAddStaff = () => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const history = useHistory();
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

  const onFinish = async (values) => {
    const birthday = values.birthday;
    const email = values.email;
    const last_name = values.last_name;
    const first_name = values.first_name;
    const passwork = values.passwork;
    const username = values.username;
    try {
      
      const response = createStaff(
        birthday, 
        email,
        last_name,
        first_name,
        passwork,
        username,
      );
      history.push("/manage-staff");
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
            <h2> THÊM NHÂN VIÊN </h2> <div className="underline"> </div>
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
              <Form.Item label="First Name" name="first_name">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Last Name" name="last_name">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Birthday" name="birthday">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="UserName" name="username">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Passwork" name="passwork">
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
export default AdminAddStaff;

