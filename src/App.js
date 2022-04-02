import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  Admin,
  Overview,
  ManagerProduct,
} from "./pages";
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          {localStorage.getItem("username") &&
          localStorage.getItem("role") === "admin" ? (
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
              </Route>
            </>
          ) : (
            <>
              <Router>
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
                  {/* <Route path="/*">
                    <Error />
                  </Route> */}
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
