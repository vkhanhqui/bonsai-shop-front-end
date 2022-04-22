import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { useFilterContext } from "../context/filter_context";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

const ListView = ({ products, total }) => {
  const { onChangePagination } = useFilterContext();
  return (
    <Wrapper>
      {products.map((product) => {
        const { images, product_name, product_price, product_id, description } =
          product;
        return (
          <article key={product_id}>
            <Link to={`/products/${product_id}`} className="link">
              <img src={`${images[0].image_path}`} alt={product_name} />
            </Link>
            <div>
            <Link to={`/products/${product_id}`} className="link">
              <h4>{product_name}</h4>
            </Link>
              <h5 className="price">{formatPrice(product_price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${product_id}`} className="btn">
                Chi tiết
              </Link>
            </div>
          </article>
        );
      })}

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
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
