import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import MatchCard from "../../components/MatchCard";

export default function ChampionsLeague(props) {
    const [liveScores, setLiveScores] = useState([]);
    const [upcomingMatches, setUpcomingMatches] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/60130162/eventsnextleague.php?id=4480`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setUpcomingMatches(data.events))

        refreshScore();
    }, [])

    function refreshScore() {
        fetch(`https://www.thesportsdb.com/api/v2/json/60130162/livescore.php?l=4480`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setLiveScores(data.events))
    }

    return <>
        <h1>Champions League</h1>
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
        </Tabs>
    </>
}