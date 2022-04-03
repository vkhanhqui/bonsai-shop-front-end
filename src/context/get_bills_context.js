import axios from "axios";

const getBills = (access_token) => {
  return axios
    .get("http://localhost:8000/bonsai-backend/admins/get-all-bills", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default getBills;
