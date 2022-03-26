import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
  AuthWrapper,
  Blogs,
  Services,
  LoginPage,
  Register,
  Admin,
  Overview,
  ManagerProduct,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          {localStorage.getItem("token") && (
            <>
              <Route path="/add-product">
                <Admin />
              </Route>
              <Route path="/overview">
                <Overview />
              </Route>
              <Route path="/manager-product">
                <ManagerProduct />
              </Route>
            </>
          )}

          <Route>
            <Navbar />
            <Sidebar />
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
            <Route path="*">
              <Error />
            </Route>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
