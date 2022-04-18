import axios from "axios";

const adminConfirmBill = (access_token, bill_id) => {
  return axios
    .put(
      `http://localhost:8000/bonsai-backend/admins/confirm-bill/${bill_id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )

    .then((res) => res.data)
    .catch((err) => null);
};
export default adminConfirmBill;
