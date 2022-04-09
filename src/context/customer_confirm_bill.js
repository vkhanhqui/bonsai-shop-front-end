import axios from "axios";

const customerConfirmBill = (orderAddress, arrayItem) => {
  return axios
    .post(
      "http://localhost:8000/bonsai-backend/customers/confirm-bill",

      { address_id: orderAddress, items: arrayItem },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => null);
};
export default customerConfirmBill;
