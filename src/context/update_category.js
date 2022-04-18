import axios from "axios";

const updateCategory = (
  category_id,
  category_name
) => {
    const token = localStorage.token; 
  return axios
  .put(
      `http://localhost:8000/bonsai-backend/categories/update-category`,
      {
        "category_id": category_id,
        "category_name": category_name
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
export default updateCategory;
