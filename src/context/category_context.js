import axios from "axios";

const getCategories = () => {
  return axios
    .get('http://localhost:8000/bonsai-backend/categories/get-all-categories')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default getCategories;
