import axios from "axios";
import Add_address from "../pages/AdminAddAddress";

const createRating = (start_number,product_id,message
  ) =>{
    const token = localStorage.token; 
  return axios
    .post(
        `http://localhost:8000/bonsai-backend/ratings/create-rating`,
      {
        "start_number": start_number,
        "product_id": product_id,
        "message": message
        
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
export default createRating;