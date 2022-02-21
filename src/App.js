import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
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
} from './pages'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>

          <Route exact path='/services'>
            <Services />
          </Route>

          <Route exact path='/blogs'>
            <Blogs />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route path='/products/:id' children={<SingleProduct />} />
          <PrivateRoute path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
          

         


        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App
