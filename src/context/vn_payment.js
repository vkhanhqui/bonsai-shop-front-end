import axios from "axios";

const vnPayment = (vn_amount, order_info) => {
  return axios
    .get(
        `http://localhost:8000/bonsai-backend/customers/vn-pay?vn_amount=${vn_amount}&order_info=${order_info}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default vnPayment;
