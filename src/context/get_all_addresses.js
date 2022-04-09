import axios from "axios";

const getAddresses = () => {
  return axios
    .get(
        "http://localhost:8000/bonsai-backend/addresses/get-all-addresses",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default getAddresses;
