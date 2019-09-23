import React, { useState, useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { MovieContext } from './MovieContext';

const Navigation = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Movies and Prices</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link>Total Movies: {movies.length}</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;
