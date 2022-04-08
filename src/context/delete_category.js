import axios from "axios";

const deleteCategory = (
    category_id
  
) => {
    const token = localStorage.token;
  return axios
    .delete(
      `http://localhost:8000/bonsai-backend/categories/delete-category/${category_id}`,
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
export default deleteCategory;
