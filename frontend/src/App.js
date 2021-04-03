import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/login" component={LoginScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          {/* id is optional in cart's link */}
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App
