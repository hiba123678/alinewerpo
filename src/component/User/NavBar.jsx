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
import ViewTrip from './ViewTrip';
function NavBar() {
  // const handleNavigation = () => {
  //   window.location.href = 'http://localhost:3000/#conect';
  // };
  // const scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  //  const navigate = useNavigate();
   
  
  // const sectionRef = useRef(null);
  // const handleClick = () => {
  //   navigate('/');
  //   sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  // };
  // const handleClick = () => {
  //   navigate.push('/'); // Navigate to the other page
  //   scroll.scrollTo('Contact', {
  //     duration: 500,
  //     delay: 100,
  //     smooth: true,
  //     offset: -70,
  //   }); // Scroll to the desired section
  // };
  
  const isLoggedIn = !!localStorage.getItem('token');
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    navigate('/' + sectionId, { replace: true });
    // You can replace '/' with your base URL or route prefix if needed
  };
  
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  
  return (
   <>
   
      {/* <Navbar.Brand href="#home"><img src={logooff} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto ">
         
          <Nav.Link    style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}}><Link to="/">Home</Link></Nav.Link>
          <Nav.Link   style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}}><Link to="/trip">Our trip</Link></Nav.Link>
        
          <Nav.Link   style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}}><button onClick={() => scrollToSection('trip#section')}>Contact</button></Nav.Link>
        
        
        
        </Nav>
      
      </Navbar.Collapse> */}




         {/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/trip">trip</Link>
        </li>
        <li>
          <ScrollLink
            to="section1contact"
            smooth={true}
            duration={1}
            onClick={() => scrollToSection('#section1contact')}
          >
          Contact
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="about-section2"
            smooth={true}
            duration={500}
            onClick={() => scrollToSection('about#section2')}
          >
          Benifts
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact-section3"
            smooth={true}
            duration={500}
            onClick={() => scrollToSection('contact#section3')}
          >
            Contact Section 3
          </ScrollLink>
        </li>
        <li>
          <button onClick={scrollToTop}>Scroll to Top</button>
        </li>
      </ul>
    </nav> */}





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
          <Nav.Link as={Link}  >
          <Nav.Link
            as={ScrollLink}
            to="Benefits"
            smooth={true}
            duration={1}
            onClick={() => scrollToSection('#Benefits')}
            style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}} >
            Benefits
          </Nav.Link></Nav.Link>
          <Nav.Link
            as={ScrollLink}
            to="sectioncontact"
            smooth={true}
            duration={500}
            onClick={() => scrollToSection('#sectioncontact')}
            style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}} >
            Contact 
          </Nav.Link>
          {/* <Nav.Link>
            <button onClick={scrollToTop}>Scroll to Top</button>
          </Nav.Link> */}





{isLoggedIn ? (
            <li>
              <Nav.Link as={Link} to="/view-trips" style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}}>My Trip</Nav.Link>
            </li>
          ) : null}

        </Nav>
        <Nav>
        <Nav.Link as={Link} to="/login" className='me-5' style={{ color: '#79817c' , fontSize:'15px', px:5,fontWeight: '500px',textTransform: 'uppercase',fontFamily:'system-ui'}}>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     </Container>
    </Navbar>

    </>

   
  )
}

export default NavBar;
