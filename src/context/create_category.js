import axios from "axios";


const createCategory = (category_name
  ) =>{
    const token = localStorage.token; 
  return axios
    .post(
        `http://localhost:8000/bonsai-backend/categories/create-category`,
      {
        "category_name" : category_name
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
export default createCategory;
