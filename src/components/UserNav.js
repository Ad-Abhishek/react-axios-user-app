import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function UserNav() {
  return (
    <>
      <Navbar className="bg-success">
        <Container className="ms-2">
          <Navbar.Brand className="text-white"><i class="bi bi-people-fill"></i> UserList</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
