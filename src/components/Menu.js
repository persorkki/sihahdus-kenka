import { Navbar, Container} from "react-bootstrap";

function Menu() {
  return (
    <>
      <Navbar variant="dark" bg="dark" expand="lg" className="mt-2">
        <Container>
          <Navbar.Brand href="/">path of exile</Navbar.Brand>
          <Navbar.Brand href="album">album covers</Navbar.Brand>

        </Container>
      </Navbar>
    </>
  );
}
export default Menu;