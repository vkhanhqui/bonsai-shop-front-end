import React from "react";
import { Gi3DMeeple, GiArrowWings, GiBlackBook } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "Trang chủ",
    url: "/",
  },
  {
    id: 3,
    text: "Sản phẩm",
    url: "/products",
  },
  // {
  // id: 4,
  // text: "Services",
  // url: "/services",
  // },
  {
    id: 5,
    text: "Tin tức",
    url: "/blogs",
  },
  {
    id: 2,
    text: "Giới thiệu",
    url: "/about",
  },
  {
    id: 6,
    url: "/register",
  },
];

export const services = [
  {
    id: 1,
    icon: <Gi3DMeeple />,

    title: "Sứ mệnh",
    text: "Không đơn giản chỉ là bán hàng như ban đầu, Green Life sẽ đem đến cho bạn một không gian đầy sáng tạo, là nơi mọi người có thể đến cùng thưởng thức sự tươi xanh và có những trải niệm cho riêng mình.",
  },
  {
    id: 2,
    icon: <GiArrowWings />,
    title: "Tương lai",
    text: "Green Life sẽ ngày càng hoàn thiện sứ mệnh thương hiệu: Lan tỏa tình yêu xanh, mở rộng mình để trở về với thiên nhiên; đồng thời, cố gắng giữ vững những giá trị tốt đẹp của truyền thống. Green Life hứa hẹn sẽ đem đến cho bạn một cuộc sống xanh.",
  },
  {
    id: 3,
    icon: <GiBlackBook />,
    title: "Lịch sử",
    text: "Vào tháng 2 năm 2022, Green Life chính thức được ra đời, xuất phát từ niềm đam mê với cây xanh. Green Life là tâm huyết của đội ngũ thuộc thế hệ trẻ. Bất cứ ai cầm trên tay sản phẩm xanh của Green Life chúng tôi cũng sẽ cảm nhận được: một chậu gốm sứ, một cái cây, nó không chỉ đơn thuần là những sản phẩm vô tri vô giác nhưng trong nó là cả một sự sống, tâm hồn và cả thương yêu.",
  },
];

// export const products_url = 'https://course-api.com/react-store-products'
export const products_url =
  "http://localhost:8000/bonsai-backend/products/get-all-products";
export const single_product_url = `http://localhost:8000/bonsai-backend/products/get-product-by-id/`;
