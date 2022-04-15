import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { Pagination } from "antd";
import { useFilterContext } from "../context/filter_context";

const GridView1 = ({ products}) => {
  const { onChangePagination } = useFilterContext();

  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.product_id} {...product} />;
        })}
      </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    min-height: 320px;
    height:auto;
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

export default GridView1;
