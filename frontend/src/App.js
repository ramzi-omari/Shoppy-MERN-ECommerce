import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main className="py-3">
        <Container>
          <h1>Welcome to Shoppy</h1>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
