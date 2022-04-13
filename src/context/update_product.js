import axios from "axios";

const updateProduct = (
  product_id,
  product_name,
  product_price,
  
  description,
) => {
    const token = localStorage.token; 
  return axios
  .put(
      `http://localhost:8000/bonsai-backend/products/update-product-info`,
      {
        "product_id": product_id,
        "description": description,
        "product_price": product_price,
        "product_name": product_name
       
      },
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
export default updateProduct;
