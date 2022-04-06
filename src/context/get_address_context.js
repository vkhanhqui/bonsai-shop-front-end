import axios from "axios";

const getAddress = () => {
  return axios
    .get('http://localhost:8000/bonsai-backend/addresses/get-all-addresses' )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default getAddress;
