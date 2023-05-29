import React from 'react'
import Container from 'react-bootstrap/Container';

import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link as RouterLink } from 'react-router-dom';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

import { useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';



import { HashLink } from 'react-router-hash-link';
import logooff from './image/logooff.png';
import { useRef } from 'react';

function NavBar() {

  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions
    localStorage.removeItem('token');
    navigate('/login');
  };

  const scrollToSection = (sectionId) => {
    navigate('/' + sectionId, { replace: true });

  };
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  
  return (
   <>
   
<Navbar  collapseOnSelect expand="lg"  variant="dark" fixed="top" style={{backgroundColor:'#f6f5ee',height:'90px', boxShadow: 'none'}} >
<Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Brand href="#home"><img src={logooff} /></Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/"  style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}}>Home</Nav.Link>
          <Nav.Link as={Link} to="/trip" style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}}>Trip</Nav.Link>
         
          <Nav.Link
            as={ScrollLink}
            to="sectionabout"
            smooth={true}
            duration={1}
            onClick={() => scrollToSection('#sectionabout')}
            style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}} >
            About Us
          </Nav.Link>
          
          <Nav.Link
            as={ScrollLink}
            to="Benefits"
            smooth={true}
            duration={1}
            onClick={() => scrollToSection('#Benefits')}
            style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}} >
            Benefits
          </Nav.Link>
          <Nav.Link
            as={ScrollLink}
            to="sectioncontact"
            smooth={true}
            duration={500}
            onClick={() => scrollToSection('#sectioncontact')}
            style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}} >
            Contact 
          </Nav.Link>
        

{isLoggedIn ? (
            <>
             <Nav.Link as={Link} to="/viewBookedTrip" className='me-5' style={{ color: '#79817c', fontSize: '15px', px: 5, fontWeight: '500px', textTransform: 'uppercase', fontFamily: 'system-ui' }}> My Booked Trip</Nav.Link>
            </>
          ) : null}

        </Nav>
        <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link onClick={handleLogout} style={{ color: '#79817c', fontSize: '15px', px: 5, fontWeight: '500px', textTransform: 'uppercase', fontFamily: 'system-ui' }}>Logout</Nav.Link>
                {/* <Nav.Link as={Link} to="/viewBookedTrip" className='me-5' style={{ color: '#79817c', fontSize: '15px', px: 5, fontWeight: '500px', textTransform: 'uppercase', fontFamily: 'system-ui' }}>View Booked Trip</Nav.Link> */}
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className='me-5' style={{ color: '#79817c', fontSize: '15px', px: 5, fontWeight: '500px', textTransform: 'uppercase', fontFamily: 'system-ui' }}>Login</Nav.Link>
            )}
          </Nav>
      </Navbar.Collapse>
     </Container>
    </Navbar>

    </>

   
  )
}

export default NavBar;
