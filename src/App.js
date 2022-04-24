import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { Navbar, Sidebar, Footer, Chat } from "./components";
import ExportBill from "./components/ExportBill";
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
  DetailBill,
  CustomerManageBill,
  Rating,
} from "./pages";

import BillPage from "./pages/BillPage";
import PageRating from "./pages/PageRating";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          {localStorage.getItem("username") &&
          localStorage.getItem("role") === "admin" ? (
            <>
              <Router>
                <Route>
                  <Switch>
                    <Route path="/add-product">
                      <AdminAddProduct />
                    </Route>
                    <Route path="/del-product">
                      <AdminDeleteProduct />
                    </Route>

                    <Route path="/get-bill-detail/">
                      <BillPage />
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
                      <AdminAddCategory />
                    </Route>

                    <Route path="/mod-category">
                      <AdminModCategory />
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
                        <Route path="/details">
                          <DetailsBlog />
                        </Route>
                        <Route path="/details1">
                          <DetailsBlog1 />
                        </Route>
                        <Route path="/details2">
                          <DetailsBlog2 />
                        </Route>
                        <Route path="/details3">
                          <DetailsBlog3 />
                        </Route>
                        <Route path="/details4">
                          <DetailsBlog4 />
                        </Route>
                        <Route path="/login">
                          <LoginPage />
                        </Route>
                        <Route exact path="/products">
                          <Products />
                        </Route>
                        <Route path="/get-bill">
                          <CustomerManageBill />
                        </Route>
                        <Route exact path="/blogs">
                          <Blogs />
                        </Route>
                        <Route exact path="/register">
                          <Register />
                        </Route>{" "}
                        <Route path="/detail-bill">
                          <DetailBill />
                        </Route>
                        <Route
                          path="/products/:id"
                          children={<SingleProduct />}
                        />
                        <PrivateRoute path="/checkout">
                          <Checkout />
                        </PrivateRoute>
                        <Route path="/*">
                          <Error />
                        </Route>
                      </Switch>
                    </Route>
                  </Switch>
                  <Footer />
                </Route>
              </Router>
            </>
          ) : (
            <>
              <Router>
                <Route>
                  <Switch>
                    <Route exact path="/">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <Home />
                      <Footer />
                    </Route>
                    <Route path="/get-bill">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <CustomerManageBill />
                      <Footer />
                    </Route>
                    <Route path="/details">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <DetailsBlog />
                      <Footer />
                    </Route>

                    <Route path="/export-bill">
                      <ExportBill />
                    </Route>

                    <Route path="/details1">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <DetailsBlog1 />
                      <Footer />
                    </Route>

                    <Route path="/details2">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <DetailsBlog2 />
                      <Footer />
                    </Route>
                    <Route path="/details3">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <DetailsBlog3 />
                      <Footer />
                    </Route>
                    <Route path="/details4">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <DetailsBlog4 />
                      <Footer />
                    </Route>
                    <Route path="/rating">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <Error />
                      <Footer />
                    </Route>
                    <Route path="/about">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <About />
                      <Footer />
                    </Route>
                    <Route path="/detail-bill">
                      <Navbar />
                      <Sidebar />
                      <DetailBill />
                      <Chat />
                      <Footer />
                    </Route>
                    <Route path="/cart">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <Cart />
                      <Footer />
                    </Route>
                    <Route path="/login">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <LoginPage />
                      <Footer />
                    </Route>
                    <Route exact path="/products">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <Products />
                      <Footer />
                    </Route>
                    <Route exact path="/blogs">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <Blogs />
                      <Footer />
                    </Route>
                    <Route exact path="/register">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <Register />
                      <Footer />
                    </Route>

                    <Route
                      path="/products/:id"
                      children={
                        <>
                          <Navbar />
                          <Chat />
                          <Sidebar /> <SingleProduct />
                          <Footer />
                        </>
                      }
                    />

                    <PrivateRoute path="/checkout">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <Checkout />
                      <Footer />
                    </PrivateRoute>

                    <Route path="/*">
                      <Navbar />
                      <Chat />
                      <Sidebar />
                      <Error />
                      <Footer />
                    </Route>
                  </Switch>
                </Route>
              </Router>
            </>
          )}
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
