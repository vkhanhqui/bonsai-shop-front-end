import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
  Blogs,
  LoginPage,
  Register,
  AdminAddProduct,
  Overview,
  AdminManageProduct,
  AdminModProduct,
  AdminManageBill,
  AdminManageCategory,
  AdminManageStaff,
  AdminAddCategory,
  AdminModCategory,
  AdminAddStaff,
  DetailsBlog,
  DetailsBlog1,
  DetailsBlog2,
  DetailsBlog3,
  DetailsBlog4,
  Error,
  AdminDeleteProduct,
  AdminDeleteCategory,
  AdminDelStaff,
  DetailBill
} from "./pages";




function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          {localStorage.getItem("username") &&
          localStorage.getItem("role") === "admin" ? (
            <>
              <Switch>
                <Route path="/add-product">
                  <AdminAddProduct />
                </Route>
                <Route path="/del-product">
                  <AdminDeleteProduct />
                </Route>

                <Route path="/del-staff">
                  <AdminDelStaff />
                </Route>

                <Route path="/del-category">
                  <AdminDeleteCategory />
                </Route>

                <Route path="/add-staff">
                  <AdminAddStaff />
                </Route>
                <Route path="/mod-product">
                  <AdminModProduct />
                </Route>

                <Route path="/add-category">
                  <AdminAddCategory/>
                </Route>

                <Route path="/mod-category">
                  <AdminModCategory/>
                </Route>

                <Route path="/overview">
                  <Overview />
                </Route>
                <Route path="/manage-product">
                  <AdminManageProduct />
                </Route>
                <Route path="/manage-bill">
                  <AdminManageBill />
                </Route>
                <Route path="/manage-category">
                  <AdminManageCategory />
                </Route>
                <Route path="/manage-staff">
                  <AdminManageStaff />
                </Route>
                <Route path="/">
                  <Navbar />
                  <Sidebar />
                  <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/cart">
                    <Cart />
                  </Route>
                  <Route path='/details'>
            <DetailsBlog/>
          </Route>

          <Route path='/detail-bill'>
            <DetailBill/>
          </Route>
          <Route path='/details1'>
            <DetailsBlog1/>
          </Route>

          <Route path='/details2'>
            <DetailsBlog2/>
          </Route>
          <Route path='/details3'>
            <DetailsBlog3/>
          </Route>
          <Route path='/details4'>
            <DetailsBlog4/>
          </Route>
                  <Route path="/login">
                    <LoginPage />
                  </Route>
                  <Route exact path="/products">
                    <Products />
                  </Route>
                  <Route exact path="/blogs">
                    <Blogs />
                  </Route>
                  <Route exact path="/register">
                    <Register />
                  </Route>
                  <Route path="/products/:id" children={<SingleProduct />} />
                  <PrivateRoute path="/checkout">
                    <Checkout />
                  </PrivateRoute>
                  <Route path="/*">
                    <Error />
                  </Route>
                  </Switch>
                </Route>
              </Switch>
            </>
          ) : (
            <>
              <Router>
                <Route>
                  <Navbar />
                  <Sidebar />
                  <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/cart">
                    <Cart />
                  </Route>
                  <Route path="/login">
                    <LoginPage />
                  </Route>
                  <Route exact path="/products">
                    <Products />
                  </Route>
                  <Route exact path="/blogs">
                    <Blogs />
                  </Route>
                  <Route exact path="/register">
                    <Register />
                  </Route>
                  <Route path="/products/:id" children={<SingleProduct />} />
                  <PrivateRoute path="/checkout">
                    <Checkout />
                  </PrivateRoute>
                <Route path="/*">
                    <Error />
                  </Route>
                  
              </Switch>
                </Route>
              </Router>
            </>
          )}
        </Switch>

        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
