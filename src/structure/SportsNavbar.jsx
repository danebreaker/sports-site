import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import '../App.css';

export default function SportsNavbar(props) {
    const [expanded, setExpanded] = useState(false);

    return <Navbar fixed="top" expand="lg" className="bg-body-tertiary" expanded={expanded} bg="dark" data-bs-theme="dark">
        <Navbar.Brand as={Link} to="/">
            <img
                src="./icon.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                style={{ marginRight: 10, marginLeft: 10 }}
            />
            DB Sports
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} style={{ marginRight: 10, marginLeft: 10 }} />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Favorite Teams</Nav.Link>
                <Nav.Link as={Link} to="/NFL" onClick={() => setExpanded(false)}>NFL</Nav.Link>
                <Nav.Link as={Link} to="/NBA" onClick={() => setExpanded(false)}>NBA</Nav.Link>
                <Nav.Link as={Link} to="/MLB" onClick={() => setExpanded(false)}>MLB</Nav.Link>
                <Nav.Link as={Link} to="/SoccerLandingPage" onClick={() => setExpanded(false)}>Soccer</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}