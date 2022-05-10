import { Navbar, Container} from "react-bootstrap";

function Menu() {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">path of exile</Navbar.Brand>
          <Navbar.Brand href="#album">album covers</Navbar.Brand>
          <Navbar.Brand href="#home">random</Navbar.Brand>
          <Navbar.Brand href="#home">crazy</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default Menu;