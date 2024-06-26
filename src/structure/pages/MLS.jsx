import { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row, Tab, Table, Tabs } from 'react-bootstrap';
import MatchCard from "../../components/MatchCard";
import '../../App.css';

function MLS() {
    const [matches, setMatches] = useState([]);
    const [matchday, setMatchday] = useState(11);
    const [table, setTable] = useState([]);
    const [liveScores, setLiveScores] = useState([]);
    const [upcomingMatches, setUpcomingMatches] = useState([]);

    const matchdays = [...Array(50).keys()];

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4346&r=${matchday}&s=2024`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setMatches(data.events))
    }, [matchday])

    useEffect(() => {
        refreshScore();

        fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4346&s=2024`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setTable(data.table))

        fetch(`https://www.thesportsdb.com/api/v1/json/60130162/eventsnextleague.php?id=4346`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setUpcomingMatches(data.events))
    }, [])

    function refreshScore() {
        fetch(`https://www.thesportsdb.com/api/v2/json/60130162/livescore.php?l=4346`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setLiveScores(data.events))
    }

    return <>
        <h1>MLS</h1>
        <Tabs fill>
            <Tab eventKey="Live" title="Live Score">
                <Button onClick={() => refreshScore()}>Refresh</Button>
                <Container>
                    <Row>
                        {
                            liveScores ?
                                liveScores.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match}></MatchCard></Col>)
                                :
                                <>
                                    <h3>There are no matches right now</h3>
                                    <h6>Check back later</h6>
                                </>
                        }
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Upcoming" title="Upcoming Matches">
                <Container>
                    <Row>
                        {
                            upcomingMatches ?
                                upcomingMatches.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match}></MatchCard></Col>)
                                :
                                <>
                                    <h3>There are no upcoming matches</h3>
                                    <h6>Check back later</h6>
                                </>
                        }
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Fixtures" title="Fixtures">
                <Dropdown>
                    <h3>Matchday {matchday}</h3>
                    <Dropdown.Toggle style={{ marginTop: 10 }}>Select Matchday</Dropdown.Toggle>
                    <Dropdown.Menu style={{ maxHeight: 300, overflowY: "scroll" }}>
                        {
                            matchdays.map(matchday => <Dropdown.Item onClick={() => setMatchday(matchday + 1)} key={matchday + 1}>{matchday + 1}</Dropdown.Item>)
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <Container>
                    <Row>
                        {
                            matches.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match}></MatchCard></Col>)
                        }
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Table" title="Table">
                <Tabs style={{ marginTop: 10 }}>
                    <Tab eventKey="Western" title="Western">
                        <Table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Team</th>
                                    <th>MP</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    table.map(team => {
                                        return <tr key={team.strTeam}>
                                            <td style={{ backgroundColor: team.intRank < 8 ? "#38abd8" : team.intRank < 10 ? "#eab327" : "white" }}>{team.intRank}</td>
                                            <td style={{ backgroundColor: team.intRank < 8 ? "#38abd8" : team.intRank < 10 ? "#eab327" : "white" }}>{team.strTeam}</td>
                                            <td style={{ backgroundColor: team.intRank < 8 ? "#38abd8" : team.intRank < 10 ? "#eab327" : "white" }}>{team.intPlayed}</td>
                                            <td style={{ backgroundColor: team.intRank < 8 ? "#38abd8" : team.intRank < 10 ? "#eab327" : "white" }}>{team.intWin}</td>
                                            <td style={{ backgroundColor: team.intRank < 8 ? "#38abd8" : team.intRank < 10 ? "#eab327" : "white" }}>{team.intDraw}</td>
                                            <td style={{ backgroundColor: team.intRank < 8 ? "#38abd8" : team.intRank < 10 ? "#eab327" : "white" }}>{team.intLoss}</td>
                                            <td style={{ backgroundColor: team.intRank < 8 ? "#38abd8" : team.intRank < 10 ? "#eab327" : "white" }}>{team.intPoints}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ color: "#38abd8" }}>Final Series</p>
                            <p style={{ color: "#eab327" }}>Final Series Play-offs</p>
                        </div>
                    </Tab>
                    <Tab eventKey="Eastern" title="Eastern">
                        <p>None</p>
                    </Tab>
                </Tabs>
            </Tab>
        </Tabs>
    </>
}

export default MLS
