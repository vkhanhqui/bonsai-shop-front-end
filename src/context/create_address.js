import axios from "axios";
import Add_address from "../pages/AdminAddAddress";

const createAddress = (phone_number,districts,city,full_address
  ) =>{
    const token = localStorage.token; 
  return axios
    .post(
        `http://localhost:8000/bonsai-backend/addresses/create-address`,
      {
        
        "phone_number":phone_number,
        "district": districts,
        "city":city,
        "full_address":full_address,
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
export default createAddress;
