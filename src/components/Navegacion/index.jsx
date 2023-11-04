import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

export default function Navegacion() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="p-3">
          <Link to="/">
            <Navbar.Brand>LICORERIA Gadiel&Caleb</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/">
                <Nav.Link href="#3">Home</Nav.Link>
              </Link>
              <Link to="/products">
                <Nav.Link href="#1">Products</Nav.Link>
              </Link>
              <Link to="/addproducts">
                <Nav.Link href="#2">addProducts</Nav.Link>
              </Link>
            </Nav>
            <div className="d-flex">
              <Link to="/signup">
                <Button variant="outline-success" className="mx-2">
                  Crear cuenta
                </Button>
              </Link>
              <Link to="/signin">
                <Button variant="outline-primary">Iniciar sesion</Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}