import "./bootstrap.min.css";
import "./App.css";
import { Container, Nav } from "react-bootstrap";
import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

import GemSearch from "./components/GemSearch";
import LabImage from "./components/LabImage";
import Menu from "./components/Menu";
import Heist from "./components/Heist";
import Syndicate from "./components/Syndicate";
import Racing from "./components/Racing";
import Album from "./components/Album";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Menu />
        <div className="mb-4">
        </div>
        <GemSearch />
        <Nav
          className="mb-2 justify-evenly"
          fill
          variant="tabs"
          defaultActiveKey="/"
        >
          <Nav.Item href="/">
            <Nav.Link eventKey="link-1" as={Link} to="/">
              Daily Labyrinth
            </Nav.Link>
          </Nav.Item>
          <Nav.Item href="/poe/heist">
            <Nav.Link eventKey="link-2" as={Link} to="heist">
              Heist
            </Nav.Link>
          </Nav.Item>
          <Nav.Item href="/poe/syndicate">
            <Nav.Link eventKey="link-3" as={Link} to="syndicate">
              Syndicate
            </Nav.Link>
          </Nav.Item>
          <Nav.Item href="/poe/racing">
            <Nav.Link eventKey="link-4" as={Link} to="racing">
              Racing
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Routes>
          <Route exact path="/" element={<LabImage />}></Route>
          <Route exact path="heist" element={<Heist />}></Route>
          <Route exact path="syndicate" element={<Syndicate />}></Route>
          <Route exact path="racing" element={<Racing />}></Route>
          <Route exact path="/album" element={<Album />}></Route>
          <Route path="/poe/:img" element={<Racing />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
