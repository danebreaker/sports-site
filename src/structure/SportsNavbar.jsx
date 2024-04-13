import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';
import { useState } from "react";

export default function SportsNavbar(props) {
    const [expanded, setExpanded] = useState(false);

    return <Navbar fixed="top" expand="lg" className="bg-body-tertiary" collapseOnSelect={true} bg="dark" data-bs-theme="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Favorite Teams</Nav.Link>
                <Nav.Link as={Link} to="/AllLeagues">All Leagues</Nav.Link>
                <Nav.Link as={Link} to="/PremierLeague">Premier League</Nav.Link>
                <Nav.Link as={Link} to="/NBA">NBA</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}