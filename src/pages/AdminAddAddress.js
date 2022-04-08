import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Modal, Select } from "antd";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Upload, notification } from "antd";
import createAddr from "../context/create_address";

const Add_address = () => {
    const [form] = Form.useForm();
    const openNotificationWithIcon = (type) => {
      notification[type]({
        message: "Thêm Địa chỉ Thành Công !!!",
        description:
          "Địa chỉ đã được thêm thành công. Bỏ qua thông báo này để tiếp tục !!",
      });
    };
    const errorNotfication = (type) => {
      notification[type]({
        message: "Thêm Địa chỉ Thất Bại!!!",
        description:
          "Địa chỉ đã được thêm thất bại. Bỏ qua thông báo này để tiếp tục !!",
      });
    };
  
    const onFinish = async (values) => {
      const phone_number = values.phone_number;
      const district = values.district;
      const city = values.city;
      const full_address = values.full_address;
      const formData = new FormData();
      try {
        const response = createAddr(
         
          phone_number,
          district,
          city,
          full_address,
      
        );
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
<Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              form={form}
            >
              <Form.Item label="Phone Number" name="phone_number">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="Full Address" name="full_address">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="District" name="district">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item label="City" name="city">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" onclick>
                  Submit
                </Button>
              </Form.Item>
            </Form>
    );
  }
  export default Add_address;