import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "antd";
import AdminHeader from "../components/admin_header";
import { useLocation } from "react-router-dom";
import AdminMenu from "../components/admin_menu";
import { formatPrice } from "../utils/helpers";
import { useProductsContext } from "../context/products_context";
import { Stars,PageHero } from "../components";
import { Form, Select, Input, Button, Upload, notification } from "antd";
import getProductById from "../context/get_product_by_id";
import GetBillDetail from "../context/get_detailBill_context"
import Rate from "./Rating"
const PageRating = () => {
    const data = useLocation().state;
    const [bills, setBills] = useState([]);
    const bill_id = data.bill_id;
    const products = bills.products;
    const bill_total = bills.bill_total;
    useEffect(() => {
      GetBillDetail(bill_id).then((res) => setBills(res));
    }, []);

    const calculatePrice = (price, number) => {
        return new Intl.NumberFormat("it-IT", {
          style: "currency",
          currency: "VND",
        }).format(price * number);
      };
      
      console.log(bill_total);
      
      const columns = [
       
        {
          title: "Sản Phẩm",
          dataIndex: "product_name",
          key: "product_name",
          align: "center",
          
        },
        
        {
          title: "Giá",
          dataIndex: "product_price",
          key: "product_price",
          align: "center",
          
        },
        {
          title: "Ảnh",
          key: "images",
          align: "center",
          dataIndex: "images",
          render: (text, record) => (
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              src={`${record.image_path}`}
              alt={`${record.image_path}`}
            />
          ),
        },
        {
            title: "Đánh giá",
            key: "images",
            align: "center",
            dataIndex: "images",
            render: (text, record) => (
                <Rate />
                
              ),
            
          },
          {
            title: "Bình luận",
            key: "images",
            align: "center",
            dataIndex: "images",
            render: (text, record) => (
                <Form
            >
              <Form.Item label="Bình luận" name="product_name">
                <Input placeholder="input placeholder" />
              </Form.Item>
              
              </Form>
              ),
            
          },
      ];
    
      return (
        <main>
          
          <Wrapper className="page section section-center">
           
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
                  Đánh giá
                </h2>
                <div className="underline"></div>
              </div>
    
              <Table dataSource={products} columns={columns} pagination={false} />
              <div style={{
                float: "right",
                padding: "50px"
              }}>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Đánh giá
                </Button>
              </Form.Item>
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
export default PageRating