import { useState } from "react";
import { mainPages } from "../data/headerData";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas
} from "react-bootstrap";

import { Link } from "react-router-dom";
function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  return (
    <>
      <Navbar collapseOnSelect expand="expand" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleShow}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Medderma
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {mainPages.map((mainPage) => (
                  <NavDropdown
                    title={mainPage.text}
                    id="basic-nav-dropdown"
                    key={mainPage.id}
                  >
                    {mainPage.ping.map((m, index) => (
                      <NavDropdown.Item
                        as={Link}
                        to={m.link}
                        onClick={handleClose}
                        key={index}
                      >
                        {m.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* website name */}
          <Navbar.Brand>
            <Link to="/">Medderma</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
