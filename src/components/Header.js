import React from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../hover-min.css';
import '../index.css';

const Header = () => {
  
  let location = window.location.pathname;

  const styles = {
    bar: {
      background: '#D8A113',
      border: 'none',
      height: '60px'
    },
    div: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    link: {
      color: 'green',
      fontWeight: 600,
      fontSize: '95%',
      margin: '0 5px',
      fontFamily: 'Nunito,  sans-serif'
      
    },
    name: {
      fontSize: '3rem',
      fontFamily: 'Nunito,  sans-serif',
      color: 'green'
    }
  }
  
  return (
    <Card.Header>
    <Navbar collapseOnSelect expand="lg" style={styles.bar}>
      <Container>
        <Navbar.Brand href="/" style={styles.name}>Leo Ọládimú</Navbar.Brand>
        <div style={styles.div}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link 
              href="/" 
              className={location === '/'? 'activeLink' : 'hvr-float'} 
              style={styles.link}
            >Home</Nav.Link>
            <Nav.Link 
              href="/Projects" 
              className={location === '/Projects'? 'activeLink' : 'hvr-float'}  
              eventKey="link-2" 
              style={styles.link}
            >Projects</Nav.Link>
            <Nav.Link 
              href="/Resume" 
              className={location === '/Resume'? 'activeLink' : 'hvr-float'} 
              eventKey="link-3" 
              style={styles.link}
            >Resume</Nav.Link>
            <Nav.Link 
              href="/ContactForm" 
              className={location === '/ContactForm'? 'activeLink' : 'hvr-float'} 
              eventKey="link-4" 
              style={styles.link}
            >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
    </Card.Header>
  );
};

export default Header;