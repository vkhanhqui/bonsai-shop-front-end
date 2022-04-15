import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { Pagination } from "antd";
import { useFilterContext } from "../context/filter_context";

const GridView = ({ products, total }) => {
  const { onChangePagination } = useFilterContext();

  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.product_id} {...product} />;
        })}
      </div>

      <Pagination
        onChange={onChangePagination}
        defaultCurrent={1}
        total={total}
        style={{ margin: "auto", width: 300, marginTop: 50 }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 270px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;
