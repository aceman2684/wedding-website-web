import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import pages from '../../util/pages';

export default () => (
  <Navbar expand="lg" bg="primary" variant="dark">
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="mx-auto">
        {pages.map((page) => <Nav.Link href={page.path} key={page.path} className="px-lg-3">{page.title}</Nav.Link>)}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
