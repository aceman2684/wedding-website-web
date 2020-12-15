import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import Logo from './components/logo';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Container fluid className="px-0">
        <Row className="mx-0 bg-primary">
          <Col xs={12} className="px-0">
            <Logo />
          </Col>
          <Col className="px-0">
            <Navbar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
