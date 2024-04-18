import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SoccerLandingPage(props) {
    return <>
        <Container>
            <h1>Soccer Leagues</h1>
            <Row>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* Premier League */}
                    <Button as={Link} to="/PremierLeague" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/dsnjpz1679951317.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* EFL Championship */}
                    <Button as={Link} to="/EnglishChampionship" variant="dark"  style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/ty5a681688770169.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* EFL League One */}
                    <Button as={Link} to="/EnglishLeagueOne" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/afedb31688770443.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* EFL League Two */}
                    <Button as={Link} to="/EnglishLeagueTwo" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/jmb3ms1688770451.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* MLS */}
                    <Button as={Link} to="/MLS" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/dqo6r91549878326.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* USL Championship */}
                    <Button as={Link} to="/USLChampionship" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/uh4zas1688513782.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* USL League One */}
                    <Button as={Link} to="/USLLeagueOne" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/wupe6s1625336127.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* USL League Two */}
                    <Button as={Link} to="/USLLeagueTwo" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/qeifr01627139879.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* Bundesliga */}
                    <Button as={Link} to="/Bundesliga" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/teqh1b1679952008.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* Serie A */}
                    <Button as={Link} to="/SerieA" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/67q3q21679951383.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* Ligue 1*/}
                    <Button as={Link} to="/Ligue1" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/qhslta1701386289.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* La Liga */}
                    <Button as={Link} to="/LaLiga" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/ja4it51687628717.png" />
                    </Button>
                </Col>
                <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                    {/* Champions League */}
                    <Button as={Link} to="/ChampionsLeague" variant="dark" style={{margin: 10, padding: 25}}>
                        <Card.Img src="https://www.thesportsdb.com/images/media/league/badge/5y7gsj1678720262.png" />
                    </Button>
                </Col>
            </Row>
        </Container>
    </>
}