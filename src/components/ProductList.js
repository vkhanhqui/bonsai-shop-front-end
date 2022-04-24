import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view, total_products: total} = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Xin lỗi, không có sản phẩm phù hợp với tìm kiếm của bạn.
      </h5>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} total={total} />;
  }
  return (
  <GridView products={products} total={total} />
  )
};

export default ProductList;
