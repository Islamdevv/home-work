import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    return (
        <div className="bg-info">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link to="/homePage">
                        <Navbar.Brand className={location.pathname === '/homePage' ? 'btn-success' : 'btn btn-warning'}>
                            Home
                        </Navbar.Brand>
                    </Link>
                    <Link to="/addProduct">
                        <Navbar.Brand className={location.pathname === '/addProduct' ? 'btn-success' : 'btn btn-warning'}>
                            Add Product
                        </Navbar.Brand>
                    </Link>
                    <Link to="/contactUs">
                        <Navbar.Brand className={location.pathname === '/contactUs' ? 'btn-success' : 'btn btn-warning'}>
                            Contact Us
                        </Navbar.Brand>
                    </Link>
                    <Link to="/aboutUs">
                        <Navbar.Brand className={location.pathname === '/aboutUs' ? 'btn-success' : 'btn btn-warning'}>
                            About Us
                        </Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;