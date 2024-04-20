import { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row, Spinner, Tab, Table, Tabs } from 'react-bootstrap';
import MatchCard from "../../components/MatchCard";
import '../../App.css';

function MLB() {
    const [liveScores, setLiveScores] = useState([]);
    const [upcomingMatches, setUpcomingMatches] = useState([]);
    const [hideSpinner, setHideSpinner] = useState("none");

    useEffect(() => {
        refreshScore();

        fetch(`https://www.thesportsdb.com/api/v1/json/60130162/eventsnextleague.php?id=4424`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setUpcomingMatches(data.events))
    }, [])

    function refreshScore() {
        fetch(`https://www.thesportsdb.com/api/v2/json/60130162/livescore.php?l=4424`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => { setLiveScores(data.events); setHideSpinner("none") })
    }

    return <>
        <h1>MLB</h1>
        <Tabs fill>
            <Tab eventKey="Live" title="Live Score" style={{ margin: 15 }}>
                <Button onClick={() => { refreshScore(); setHideSpinner("inline-flex") }}>Refresh</Button>
                <Spinner variant="danger" animation="grow" style={{ display: hideSpinner }} />
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
            <Tab eventKey="Upcoming" title="Upcoming Matches" style={{ margin: 15 }}>
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
        </Tabs>
    </>
}

export default MLB