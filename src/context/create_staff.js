import axios from "axios";

const createStaff = (
 
        birthday,
        email,
        last_name,
        first_name,
        passwork,
        username
  ) =>{
    const token = localStorage.token; 
  return axios
    .post(
        `http://localhost:8000/bonsai-backend/admins/create-staff`,
      {
       
        "birthday": birthday,
        "email": email,
        "last_name": last_name,
        "first_name": first_name,
        "password": passwork,
        "username": username
      },
      {
        headers: {
          accept: 'application/json',
          Authorization:   `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )

    .then((res) => res.data)
    .catch((err) => null);
};
export default createStaff;
