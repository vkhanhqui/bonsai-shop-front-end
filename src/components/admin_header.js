import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useProductsContext } from "../context/products_context";
const AdminHeader = () => {
  const { closeSidebar } = useProductsContext();
  const [check, setCheck] = useState(true)
  useEffect(() => {
    setCheck(false)
  })

  return (
    <div
      className="nav-header"
      style={{ width: "100%", backgroundColor: "#8FBC8F", height: 150 }}
    >
      <Link to="/">
        <img
          src={logo}
          alt="Green Life"
          style={{
            marginTop: -80,
            height: 250,
            marginLeft: 70,
          }}
        />
      </Link>
      {localStorage.getItem("role") !== 'admin' || localStorage.getItem("role") !== 'staff' ? (
          console.log(localStorage.getItem("role"))
      ) : (
        <Link
          to="/login"
          className="cart-btn"
          onClick={closeSidebar}
          style={{ "font-size": 27, color: "black", marginLeft: 770 }}
        >
          Đăng nhập <FaUserPlus />
        </Link>
      )}
    </div>
  );
};

export default AdminHeader;