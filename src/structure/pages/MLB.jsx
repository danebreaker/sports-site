import { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row, Tab, Table, Tabs } from 'react-bootstrap';
import MatchCard from "../../components/MatchCard";
import '../../App.css';

function MLB() {
    const [games, setGames] = useState([]);
    const [week, setWeek] = useState(0);
    const [season, setSeason] = useState("2024")
    const [standings, setStandings] = useState([]);

    // const weeks = [...Array(18).keys()];

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4424&r=${week}&s=${season}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setGames(data.events))
    }, [week, season])

    return <>
        <h1>MLB</h1>
        <Tabs fill>
            <Tab eventKey="Standings" title="Standings">
                <h3>Coming Soon...</h3>
            </Tab>
            <Tab eventKey="Schedule" title="Schedule">
                {/* <Dropdown>
                    <Dropdown.Toggle>Select Week</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            weeks.map(week => <Dropdown.Item onClick={() => setWeek(week + 1)} key={week + 1}>{week + 1}</Dropdown.Item>)
                        }
                    </Dropdown.Menu>
                </Dropdown> */}
                <p>First 25 games of the season</p>
                <Container>
                    <Row>
                        {
                            games.map(game => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={game.idEvent}><MatchCard {...game}></MatchCard></Col>)
                        }
                    </Row>
                </Container>
            </Tab>
        </Tabs>
    </>
}

export default MLB
