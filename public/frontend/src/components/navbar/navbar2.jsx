import SearchButton from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar2 = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-light" href="#">
          Restaurant
        </Navbar.Brand>
        <Navbar.Toggle
          displayName="hi"
          className="text-light"
          aria-controls="navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-light" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#action2">
              Menu
            </Nav.Link>
            <Nav.Link className="text-light" href="#">
              About
            </Nav.Link>
          </Nav>
          <SearchButton props={{ class: "" }} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar2;
