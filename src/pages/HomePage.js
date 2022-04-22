import React from "react";
import { ToastContainer, toast } from "react-toastify";

import { Hero, Contact, FeaturedProducts } from "../components";
import { useLocation, useHistory } from "react-router-dom";

import { Services } from "../components";
const HomePage = () => {
  const history = useHistory();

  const search = useLocation().search;
  const isVNPaySuccess = new URLSearchParams(search).get("isVNPaySuccess");
  if (isVNPaySuccess === "true") {
    toast("Đặt hàng thành công!!!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    localStorage.removeItem("cart");
    history.push("/");
    setTimeout(() => window.location.reload(), 2000);
  }

  return (
    <main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Hero />
      <FeaturedProducts/>
      <Services/>
      <Contact />
    </main>
  );
};

export default HomePage;
