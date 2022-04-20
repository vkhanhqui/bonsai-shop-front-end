import axios from "axios";

const getProductById = (
    product_id
  
) => {
    const token = localStorage.token;
  return axios
    .get(
      `http://localhost:8000/bonsai-backend/products/get-product-by-id/${product_id}`,
      {
        headers: {
            accept: 'application/json',
            Authorization:   `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
      }
    )
    .then((res) => res.data)
    .catch((err) => null);
};
export default getProductById