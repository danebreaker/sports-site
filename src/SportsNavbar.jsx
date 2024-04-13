import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SportsNavbar(props) {
    return <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                <Nav>
                    <Nav.Link as={Link} to="/">Favorite Teams</Nav.Link>
                    <Nav.Link as={Link} to="/AllLeagues">All Leagues</Nav.Link>
                    <Nav.Link as={Link} to="/PremierLeague">Premier League</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}