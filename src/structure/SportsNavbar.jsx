import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';

export default function SportsNavbar(props) {
    return <Navbar fixed="top" expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Favorite Teams</Nav.Link>
                <Nav.Link as={Link} to="/AllLeagues">All Leagues</Nav.Link>
                <Nav.Link as={Link} to="/PremierLeague">Premier League</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}