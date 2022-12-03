import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <NavbarBrand href="/">FILMS</NavbarBrand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            <Nav.Link className="">LOGIN</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
