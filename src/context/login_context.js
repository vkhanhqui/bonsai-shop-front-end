import axios from "axios";

const handleLogin = (username, password) => {
  return axios
    .post(
      'http://localhost:8000/bonsai-backend/login/token',
      {
        body: JSON.stringify(
          `grant_type&username=${username}&password=${password}&scope&client_secret=`
        ),
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default handleLogin;
