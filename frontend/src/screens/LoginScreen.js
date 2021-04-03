import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Form, Button, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { login } from "../actions/userAtions"
import FormContainer from "../components/FormContainer"

const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // to get URL query string and take the right of = sign
  const redirect = location.search ? location.search.split("=")[1] : "/"

  const submitHandler = (e) => {
    e.preventDefault()
    // dispatch Login
  }

  return (
    <FormContainer>
      <h1>Signe In</h1>
      <Form on submit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label> Email Adress</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label> Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Customer ?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
