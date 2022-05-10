import { Container, Row, Col, Nav, Dropdown } from "react-bootstrap";
import "./bootstrap.min.css";
import "./App.css";
import React from "react";
import GemSearch from "./components/GemSearch";
import LabImage from "./components/LabImage";

import Menu from "./components/Menu";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Heist from "./components/Heist";
import Syndicate from "./components/Syndicate";
import { NavLink, NavItem } from "react-bootstrap";
import Racing from "./components/Racing";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Menu />
        <Row>
          <Col>
            <h1 className="text-primary mt-2">Sihahdus</h1>
          </Col>
        </Row>

        <GemSearch />
        <Nav
          className="mb-2 justify-evenly"
          fill
          variant="tabs"
          defaultActiveKey="/poe/lab"
        >
          <Nav.Item href="/poe/lab">
            <Nav.Link eventKey="link-1" as={Link} to="/poe/lab">
              Daily Labyrinth
            </Nav.Link>
          </Nav.Item>
          <Nav.Item href="/poe/heist">
            <Nav.Link eventKey="link-2" as={Link} to="/poe/heist">
              Heist
            </Nav.Link>
          </Nav.Item>
          <Nav.Item href="/poe/syndicate">
            <Nav.Link eventKey="link-3" as={Link} to="/poe/syndicate">
              Syndicate
            </Nav.Link>
          </Nav.Item>
          <Nav.Item href="/poe/racing">
            <Nav.Link eventKey="link-4" as={Link} to="/poe/racing">
              Racing
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Routes>
          <Route exact path="/poe/lab" element={<LabImage />}></Route>
          <Route exact path="/poe/heist" element={<Heist />}></Route>
          <Route exact path="/poe/syndicate" element={<Syndicate />}></Route>
          <Route path="/poe/:img" element={<Racing />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
