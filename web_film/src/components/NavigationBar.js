import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { BsPersonFill } from "react-icons/bs";

const NavigationBar = () => {
  return (
    <div className="">
      <Navbar variant="dark">
        <Container>
          <NavbarBrand href="/">FILMS</NavbarBrand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            <Nav.Link href="#superhero">ROMANCE</Nav.Link>
            <Nav.Link href="/login">
              <BsPersonFill />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
