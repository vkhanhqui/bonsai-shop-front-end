import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Home } from ".";
const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    function fetchData() {
      fetchSingleProduct(`${url}${id}`);
    }
    fetchData();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Home />
  }

  const {
    product_name,
    product_price,
    description,
    star_number,
    reviews,
    images,
  } = product;
  return (
    <Wrapper>
      <PageHero title={product_name} product />

      <div className="section section-center page">
        <Link to="/products" className="btn">
          Trở về trang sản phẩm
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{product_name}</h2>
            <Stars stars={4.3} reviews={reviews} />
            <h5 className="price">{formatPrice(product_price)}</h5>
            <p className="desc">{description}</p>
            {/* <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>SKU :</span>
              {sku}
            </p>
            <p className="info">
              <span>Brand :</span>
              {company}
            </p> */}
            <hr />
            <AddToCart oldProduct={product} />
            {/* {stock > 0 && <AddToCart product={product} />}*/}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
