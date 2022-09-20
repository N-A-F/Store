import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Mynav() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#link">Cart</Nav.Link>
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <Link to={"/Setting"}>
                <NavDropdown.Item href="#action/3.1">setting</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="#action/3.2">Track</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mynav;
