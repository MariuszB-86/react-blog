import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';



const NavBar = () => { 
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded justify-content-between">
        <Navbar.Text className="text-white px-3">Blog.app</Navbar.Text>
        <Nav className="px-3">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        </Nav>
    </Navbar>
  );
}  

export default NavBar;








