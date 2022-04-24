import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import { useHistory } from "react-router-dom";
// import { useUserContext } from "../context/user_context";
// import { LoginPage } from ".";
// import { Redirect } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const emailRef = React.useRef();
  const firstnameRef = React.useRef();
  const lastnameRef = React.useRef();
  const birthdayRef = React.useRef();
  const history = useHistory();
  const handleSubmit = async () => {
    // console.log("data", usernameRef.current.value, passwordRef.current.value);
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;
    const first_name = firstnameRef.current.value;
    const last_name = lastnameRef.current.value;
    const birthday = birthdayRef.current.value;
    const response = await axios.post(
      "http://localhost:8000/bonsai-backend/customers/create-customer",
      {
        birthday,
        email,
        last_name,
        first_name,
        password,
        username,
      }
    );
    console.log(response.data);
    history.push("/login");
  };
  return (
    <main>
      <PageHero title="Đăng ký" />
      <Wrapper className="page">
        <article>
          <div className="informationLogin">
            <h2>UserName: </h2>
          </div>
          <div className="inputLogin">
            <input
              ref={usernameRef}
              type="user"
              className="form-input"
              placeholder="Enter User"
            />
          </div>

          <div className="informationLogin">
            <h2>Password:  </h2>
          </div>

          <div className="inputLogin">
            <input
              ref={passwordRef}
              type="password"
              className="form-input"
              placeholder="Enter Password"
            />
          </div>

          <div className="informationLogin">
            <h2>Email: </h2>
          </div>
          <div className="inputLogin">
            <input
              ref={emailRef}
              type="user"
              className="form-input"
              placeholder="Enter Email"
            />
          </div>

          <div className="informationLogin">
            <h2>FirstName:</h2>
          </div>
          <div className="inputLogin">
            <input
              ref={firstnameRef}
              type="user"
              className="form-input"
              placeholder="Enter FirstName"
            />
          </div>

          <div className="informationLogin">
            <h2>LastName: </h2>
          </div>
          <div className="inputLogin">
            <input
              ref={lastnameRef}
              type="user"
              className="form-input"
              placeholder="Enter LastName"
            />
          </div>

          <div className="informationLogin">
            <h2>Birthday:</h2>
          </div>
          <div className="inputLogin">
            <input
              ref={birthdayRef}
              type="user"
              className="form-input"
              placeholder="Enter Birthday"
            />
          </div>
          <div>
            <button
              type="submitBtn"
              className="submit-btn"
              onClick={handleSubmit}
            >
              Đăng ký
            </button>

            <button type="cancelBtn" className="submit-btn1">
              Thoát
            </button>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  h2 {
    font-family: "Courier New", BrushScript, monospace;
    color: rgb(0, 100, 0);
    margin-left: 450px;
  }

  p {
    line-height: 2;
    max-width: 100rem;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    font-size: 30px;
  }
  .title {
    text-align: left;
  }
  input {
    display: block;
    width: 90%;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 25px;
    border: 2px solid var(--clr-primary-7);
    border-radius: 25px;
    outline: none;
    font-size: 15px;
    margin-left: 450px;
  }
  input:hover {
    border: 2px solid var(--clr-primary-3);
  }

  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
  }
  .submit-btn {
    position: relative;
    display: inline-block;
    width: 30%;
    height: 40px;
    transition: 0.5s;

    margin-left: 500px;
    margin-bottom: 20px;
    item-align: right;
    color: var(--clr-grey-5);
    background: var(--clr-primary-7);
    border-radius: 25px;
  }
  .submit-btn1 {
    position: relative;
    display: inline-block;
    width: 30%;
    height: 40px;
    transition: 0.5s;

    margin-left: 30px;
    margin-right: -500px;
    margin-bottom: 20px;

    item-align: right;
    color: var(--clr-grey-5);
    background: var(--clr-primary-7);
    border-radius: 25px;
  }
  submit-btn:hover {
    border: 2px solid var(--clr-primary-3);
  }
  .heoNe {
    margin-top: 10px;
    margin-left: 130px;
    margin-right: -600px;
  }
`;
export default Register;
