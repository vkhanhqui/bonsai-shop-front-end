import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
// import { useUserContext } from "../context/user_context";
import { useHistory } from "react-router-dom";
import Dropdown from 'react-dropdown';
import { DropdownButton} from 'react-bootstrap';
import { CDropdown, CDropdownToggle, CDropdownItem, CDropdownMenu } from "@coreui/react";
import Popper from "popper.js";
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
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {localStorage.getItem("token") ? (
       // <button type="button" className="auth-btn" onClick={Logout}>
       //   {localStorage.getItem("username")} <FaUserMinus />
       // </button>
       
    //    <select type="button" className="auth-btn">
            
    //         <option value="username">{localStorage.getItem("username")}</option>
    //         <option value="ls đơn hàng" onChange={handleCLick}>ls đơn hàng
            
    //         </option>
    //         <option value="Đăng xuất" onClick={Logout}>Đăng xuất</option>         
    //  </select>
    <MDBDropdown>
    <MDBDropdownToggle tag='a' className='btn btn-primary'>
      {localStorage.getItem("username")}
    </MDBDropdownToggle>
    <MDBDropdownMenu>
      <MDBDropdownItem>
        <MDBDropdownLink href="/get-bill">Lịch sử mua hàng</MDBDropdownLink>
      </MDBDropdownItem>
      <MDBDropdownItem>
        <MDBDropdownLink href="#" onClick={Logout}>Đăng xuất</MDBDropdownLink>
      </MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
     
      ) : (
        <MDBDropdown>
    <MDBDropdownToggle tag='a' className='btn btn-primary'>
      Tài Khoản <FaUserPlus/>
    </MDBDropdownToggle>
    <MDBDropdownMenu>
      <MDBDropdownItem className="dropdown-item">
        <MDBDropdownLink href="/register">Đăng ký</MDBDropdownLink>
      </MDBDropdownItem>
      <MDBDropdownItem className="dropdown-item">
        <MDBDropdownLink href="/login">Đăng nhập</MDBDropdownLink>
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
  .dropdown-item{
    color: red;
  } 
  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
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
