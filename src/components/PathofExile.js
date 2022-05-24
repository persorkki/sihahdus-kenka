import GemSearch from "./GemSearch";
import LabImage from "./LabImage";
import Heist from "./Heist";
import React from "react";
import { BrowserRouter, Routes, Link, Route, Navigate } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Syndicate from "./Syndicate";
import Racing from "./Racing";


function PathofExile() {
  return (
    <>
      <div className="mb-4"></div>
      <GemSearch />
      <Nav
        className="mb-2 justify-evenly"
        fill
        variant="tabs"
        defaultActiveKey="link-1"
      >
        <Nav.Item href="#lab">
          <Nav.Link eventKey="link-1" as={Link} to="lab">
            Daily Labyrinth
          </Nav.Link>
        </Nav.Item>
        <Nav.Item href="#heist">
          <Nav.Link eventKey="link-2" as={Link} to="heist">
            Heist
          </Nav.Link>
        </Nav.Item>
        <Nav.Item href="#syndicate">
          <Nav.Link eventKey="link-3" as={Link} to="poe/syndicate">
            Syndicate
          </Nav.Link>
        </Nav.Item>
        <Nav.Item href="#racing">
          <Nav.Link eventKey="link-4" as={Link} to="poe/racing">
            Racing
          </Nav.Link>
        </Nav.Item>
      </Nav>
        <Routes>
            
            <Route exact path="/lab" element={<LabImage/>}></Route>
            <Route path="/heist" element={<Heist />}></Route>
            <Route path="poe/syndicate" element={<Syndicate />}></Route>
            <Route path="/poe/:img" element={<Racing />}></Route>
        </Routes>
    </>
  );
}
export default PathofExile;
