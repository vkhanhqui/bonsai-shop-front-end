import axios from "axios";

const exportBill = (bill_id) =>{
  const token = localStorage.token;
  return axios
    .get(
        `http://localhost:8000/bonsai-backend/customers/export-bill/${bill_id}`,
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
export default exportBill;
