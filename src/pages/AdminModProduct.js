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
import { Link, useHistory } from "react-router-dom";
const { Option } = Select;

const normFile = (e) => {
  // console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const AdminModProduct = () => {
  const data = useLocation().state;
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);

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

  const onFinish = async (values) => {
    const product_id = values.product_id;
    const product_name = values.product_name;
    const product_price = values.product_price;
    const category_id = values.category_id;
    const description = values.description;
    const images = values.images;
   
    const formData = new FormData();
    try {
      for (let i = 0; i < images.length; i++) {
        formData.append("files", images[i].originFileObj);
      }
      const response = updateProduct(
        product_id,
        product_name,
        product_price,
        category_id,
        description,
        
      );
      history.push("/manage-product");
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
            <h2> SỬA SẢN PHẨM </h2> <div className="underline"> </div>
          </div>
          <div>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{
                remember: true,
                product_id: data.product_id,
                product_name: data.product_name,
                product_price: data.product_price,
                category_id: data.category_id,
                description: data.description,
                images: data.images,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              style={{ marginLeft: -300 }}
              form={form}
            >
              <Form.Item label="Mã sản phẩm" name="product_id" >
                <Input placeholder="input placeholder" required = {true} readOnly = {true}  />
              </Form.Item>
              <Form.Item label="Tên Sản Phẩm" name="product_name">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Giá Sản Phẩm" name="product_price">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Loại Sản Phẩm" name="category_id">
                <Select
                  style={{
                    width: 300,
                  }}
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
              <Form.Item label="Mô Tả Sản Phẩm" name="description">
                <Input
                  placeholder="input placeholder"
                  style={{ height: 200 }}
                />
              </Form.Item>
              <Form.Item
                label="Ảnh Sản Phẩm"
                name="images"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  action="//localhost:8000/bonsai-backend/files/upload-image"
                  listType="picture"
                  maxCount={3}
                  accept=".jpg,.png,.jpeg"
                  multiple
                >
                  <Button icon={<UploadOutlined />}> Upload(Max: 3) </Button>
                </Upload>
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
export default AdminModProduct;
