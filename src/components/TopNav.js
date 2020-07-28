import React, {useState} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const TopNav = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" expanded={expanded}>
                <Navbar.Brand as={Link} to="/" style={{fontFamily: "'Grand Hotel', cursive", fontSize: "xx-large"}}>
                    RUstagram
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/signin" onClick={() => setExpanded(false)}>Sign In</Nav.Link>
                        <Nav.Link as={Link} to="/signup" onClick={() => setExpanded(false)}>Sign Up</Nav.Link>
                        <Nav.Link as={Link} to="/profile" onClick={() => setExpanded(false)}>Profile</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TopNav;