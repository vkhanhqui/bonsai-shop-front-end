import axios from "axios";


const deleteStaffs = (access_token
  ) =>{
    
  return axios
    .delete(
        `http://localhost:8000/bonsai-backend/admins/delete-staff/${access_token}`,
      {
      },
      {
        headers: {
          accept: 'application/json',
          Authorization:   `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    .then((res) => res.data)
    .catch((err) => null);
};
export default deleteStaffs
