import axios from "axios";

const createProduct = (
  access_token,
  product_name,
  product_price,
  category_id,
  description,
  formData
) => {
  return axios
    .post(
      `http://localhost:8000/bonsai-backend/products/create-product?product_name=${product_name}&product_price=${product_price}&category_id=${category_id}&description=${description}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => null);
};
export default createProduct;
