import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView1 from "./GridView1";
import ListView from "./ListView";

const BestSeller = () => {
  const { filtered_products: products} = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Xin lỗi, không có sản phẩm nào phù hợp với tìm kiếm của bạn.
      </h5>
    );
  }
  return (
  <GridView1 products={products.slice(6)}/>
  )
};

export default BestSeller

