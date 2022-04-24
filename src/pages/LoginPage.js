import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import { Link, useHistory } from "react-router-dom";
import handleLogin from "../context/login_context";

import { Form, Select, Input, Button, Upload, notification } from "antd";
const LoginPage = () => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();
  const [form] = Form.useForm();
  const roles = {
    1: "admin",
    2: "staff",
    3: "customer",
  };
  const history = useHistory();
  const [login_info, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const [login, setLogin] = useState({});

  useEffect(() => {
    handleLogin(login_info.username, login_info.password).then((res) =>
      setLogin(res)
    );
  }, [login_info.username, login_info.password]);

  const handleSubmit = () => {
    setLoginInfo({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
    if (login) {
      localStorage.setItem("token", login.access_token);
      localStorage.setItem("username", login.username);
      localStorage.setItem("role", roles[login.role_id]);
      history.push("/");
      window.location.reload();
    } 
    
  };
  return (
    <main>
      <PageHero title="Đăng nhập" />
      <Wrapper className="page">
        <article>
          <Form
          form={form}
          >
          <div className="informationLogin">
            <h2>User: </h2>
          </div>
          <div className="inputLogin">
            <input
              ref={usernameRef}
              type="user"
              className="form-input"
              placeholder="Vui lòng nhập tên đăng nhập"
            />
          </div>

          <div className="informationLogin">
            <h2>Password: </h2>
          </div>

          <div className="inputLogin">
            <input
              ref={passwordRef}
              type="password"
              className="form-input"
              placeholder="Vui lòng nhập mật khẩu"
            />
          </div>
          <div>
            <button
              type="submitBtn"
              className="submit-btn"
              onClick={handleSubmit}
            >
              Đăng nhập
            </button>

            <button type="cancelBtn" className="submit-btn1">
              Thoát
            </button>
          </div>
          <br></br>
          <Link to="/register" className="register-btn">
            Bạn chưa có tài khoản?
          </Link>
          </Form>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 40rem;

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
    margin-bottom: 20px;
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

    item-align: right;
    color: var(--clr-grey-5);
    background: var(--clr-primary-7);
    border-radius: 25px;
  }
  submit-btn:hover {
    border: 2px solid var(--clr-primary-3);
  }
  .register-btn {
    position: relative;
    display: inline-block;
    width: 30%;

    margin-left: 600px;
    margin-right: -500px;

    item-align: right;
  }
`;
export default LoginPage;
