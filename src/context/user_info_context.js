import axios from "axios";

const getUserInfo = (access_token) => {
  return axios
    .get(
      'http://localhost:8000/bonsai-backend/customers/get-user-info',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default getUserInfo;
