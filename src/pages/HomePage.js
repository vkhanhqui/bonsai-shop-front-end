import React from "react";
import { Hero, Contact } from "../components";
import { useLocation, useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const search = useLocation().search;
  const isVNPaySuccess = new URLSearchParams(search).get("isVNPaySuccess");
  if (isVNPaySuccess === 'true') {
    localStorage.removeItem('cart');
    history.push("/");
    window.location.reload();
  }

  return (
    <main>
      <Hero />
      <Contact />
    </main>
  );
};

export default HomePage;
