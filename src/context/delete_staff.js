import axios from "axios";

const deleteStaffs = (
  user_id 
  
  ) => {

     const token =localStorage.token;
   
  return axios
    .delete(`http://localhost:8000/bonsai-backend/admins/delete-staff/${user_id}`, {
      headers: {
        accept: 'application/json',
        Authorization:   `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
export default deleteStaffs;
