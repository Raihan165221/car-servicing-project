import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Genius Car Mekar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/#services">Services</Nav.Link>
                        <Nav.Link href="/#experts">Experts</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user ?
                                <Button className='ms-3' onClick={handleSignOut}>Sign Out</Button>
                                :
                                <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;