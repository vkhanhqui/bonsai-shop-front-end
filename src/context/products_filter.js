import axios from "axios";

const getProducts = (categoryId, sortName, sortPrice, searchText, currentPage, limit) => {
  return axios
    .post("http://localhost:8000/bonsai-backend/products/get-all-products", {
      category_id: categoryId,
      sort_price: sortPrice,
      sort_name: sortName,
      range_price_from: "",
      range_price_to: "",
      search_text: searchText,
      page: currentPage,
      limit: limit,
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default getProducts;
