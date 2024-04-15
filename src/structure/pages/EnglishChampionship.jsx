import { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row, Tab, Table, Tabs } from 'react-bootstrap';
import MatchCard from "../../components/MatchCard";
import '../../App.css';

function EnglishChampionship() {
    const [matches, setMatches] = useState([]);
    const [matchday, setMatchday] = useState(33);
    const [table, setTable] = useState([]);

    const matchdays = [...Array(46).keys()];

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4329&r=${matchday}&s=2023-2024`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setMatches(data.events))
    }, [matchday])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4329&s=2023-2024`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setTable(data.table))
    }, [])

    return <>
        <h1>English Championship</h1>
        <Tabs fill>
            <Tab eventKey="Table" title="Table">
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
                                    <td style={{ backgroundColor: team.intRank > 21 ? "#fc3f3f" : team.intRank < 3 ? "#38abd8" : team.intRank < 7 ? "#eab327" : "white" }}>{team.intRank}</td>
                                    <td style={{ backgroundColor: team.intRank > 21 ? "#fc3f3f" : team.intRank < 3 ? "#38abd8" : team.intRank < 7 ? "#eab327" : "white" }}>{team.strTeam}</td>
                                    <td style={{ backgroundColor: team.intRank > 21 ? "#fc3f3f" : team.intRank < 3 ? "#38abd8" : team.intRank < 7 ? "#eab327" : "white" }}>{team.intPlayed}</td>
                                    <td style={{ backgroundColor: team.intRank > 21 ? "#fc3f3f" : team.intRank < 3 ? "#38abd8" : team.intRank < 7 ? "#eab327" : "white" }}>{team.intWin}</td>
                                    <td style={{ backgroundColor: team.intRank > 21 ? "#fc3f3f" : team.intRank < 3 ? "#38abd8" : team.intRank < 7 ? "#eab327" : "white" }}>{team.intDraw}</td>
                                    <td style={{ backgroundColor: team.intRank > 21 ? "#fc3f3f" : team.intRank < 3 ? "#38abd8" : team.intRank < 7 ? "#eab327" : "white" }}>{team.intLoss}</td>
                                    <td style={{ backgroundColor: team.intRank > 21 ? "#fc3f3f" : team.intRank < 3 ? "#38abd8" : team.intRank < 7 ? "#eab327" : "white" }}>{team.intPoints}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                <div style={{ textAlign: 'left' }}>
                    <p style={{ color: "#38abd8" }}>Promotion to Premier League</p>
                    <p style={{ color: "#eab327" }}>Promotion Playoffs</p>
                    <p style={{ color: "#fc3f3f" }}>Relegation to League 1</p>
                </div>
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
        </Tabs>
    </>
}

export default EnglishChampionship