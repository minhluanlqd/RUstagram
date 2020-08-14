import React, {useState, useContext} from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../App';

const TopNav = () => {

    const [expanded, setExpanded] = useState(false);
    const {state, dispatch} = useContext(UserContext);
    const history = useHistory();

    const onClickLogOut = () => {
        setExpanded(false);
        localStorage.clear();
        dispatch({type: "CLEAR"});
        history.push('./signin');
    }

    const renderList = () => {
        if(state){
            return [
                <Nav.Link as={Link} to="/create" onClick={() => setExpanded(false)}>Create Post</Nav.Link>,
                <Nav.Link as={Link} to="/profile" onClick={() => setExpanded(false)}>Profile</Nav.Link>,
                <Button variant="danger" onClick={onClickLogOut}>Log Out</Button>
            ]
        }else{
            return [
                <Nav.Link as={Link} to="/signin" onClick={() => setExpanded(false)}>Sign In</Nav.Link>,
                <Nav.Link as={Link} to="/signup" onClick={() => setExpanded(false)}>Sign Up</Nav.Link>
            ]
        }
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" expanded={expanded}>
                <Navbar.Brand as={Link} to={state ? "/" : "/signin"} style={{fontFamily: "'Grand Hotel', cursive", fontSize: "xx-large"}}>
                    RUstagram
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {renderList()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default TopNav;