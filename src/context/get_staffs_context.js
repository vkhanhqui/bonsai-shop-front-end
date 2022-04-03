import axios from "axios";

const getStaffs = (access_token) => {
  return axios
    .get("http://localhost:8000/bonsai-backend/admins/get-all-staffs", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default getStaffs;
