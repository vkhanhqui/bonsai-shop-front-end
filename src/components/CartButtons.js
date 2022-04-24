import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
// import { useUserContext } from "../context/user_context";
import { useHistory } from "react-router-dom";


import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

const CartButton = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const history = useHistory();
  // const { loginWithRedirect, myUser, logout } = useUserContext();
  const Logout = () => {
    clearCart();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    history.push("/login");
  };
  const handleCLick = () => {
    <Link to="/cart" className="cart-btn">
        
      </Link>
  }
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Giỏ hàng 
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {localStorage.getItem("token") ? (
       
    <MDBDropdown className="dropdown">
    <MDBDropdownToggle tag='a' className='cart-btn'>
      {localStorage.getItem("username")} <FaUserMinus />
    </MDBDropdownToggle>

    <MDBDropdownMenu >
      <MDBDropdownItem >
        <MDBDropdownLink href="/get-bill" className="cart-btn">Lịch sử mua hàng</MDBDropdownLink>
      </MDBDropdownItem>
      <MDBDropdownItem >
        <MDBDropdownLink href="/login" onClick={Logout} className="cart-btn">Đăng xuất</MDBDropdownLink>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
     
      ) : (
        <MDBDropdown className="dropdown">
    <MDBDropdownToggle tag='a' className='cart-btn'>
      Tài khoản <FaUserPlus/>
    </MDBDropdownToggle>
    <MDBDropdownMenu >
      <MDBDropdownItem >
        <MDBDropdownLink href="/register" className="cart-btn">Đăng ký</MDBDropdownLink>
      </MDBDropdownItem>
      <MDBDropdownItem>
        <MDBDropdownLink href="/login"className="cart-btn" >Đăng nhập</MDBDropdownLink>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
        
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  
 
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.1rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-7);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButton;
