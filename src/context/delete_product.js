import axios from "axios";

const deleteProduct = (
 
  product_id
  
) => {
    const token = localStorage.token;
  return axios
    .delete(
      `http://localhost:8000/bonsai-backend/products/delete-product-by-id/${product_id}`,
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
export default deleteProduct;
