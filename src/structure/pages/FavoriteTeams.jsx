import { useEffect, useState } from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import MatchCard from '../../components/MatchCard';
import '../../App.css';

function FavoriteTeams() {

    const [packLast5, setPackLast5] = useState([]);
    const [bucksLast5, setBucksLast5] = useState([]);
    const [brewLast5, setBrewLast5] = useState([]);
    const [mcLast5, setMCLast5] = useState([]);
    const [wrexLast5, setWrexLast5] = useState([]);
    const [minnLast5, setMinnLast5] = useState([]);
    const [madLast5, setMadLast5] = useState([]);

    const importantLeagues = ["English Premier League", "English League Championship", "German Bundesliga", "Italian Serie A", "French Lique 1", "Spanish La Liga", "American Major League Soccer", "NBA", "NFL", "English League 1", "English League 2", "UEFA Champions League"]
    const importantTeams = [["Green Bay Packers", 134940], ["Milwaukee Bucks", 134874], ["Milwaukee Brewers", 135274], ["Manchester City", 133613], ["Wrexham", 134775], ["Minnesota United", 135852], ["Forward Madison FC", 142160]]

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=134940", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setPackLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=134874", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setBucksLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=135274", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setBrewLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=133613", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setMCLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=134775", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setWrexLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=135852", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setMinnLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=142160", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setMadLast5(data.results)
            })
    }, [])

    return <>
        <Container fluid>
            <h1>Packers</h1>
            <Tabs>
                <Tab eventKey="Last 5" title="Last 5">
                    <Row>
                        {
                            packLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                </Tab>
                <Tab eventKey="Next 5" title="Next 5">
                    <p>Coming Soon...</p>
                </Tab>
            </Tabs>
            <h1>Bucks</h1>
            <Tabs>
                <Tab eventKey="Last 5" title="Last 5">
                    <Row>
                        {
                            bucksLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                </Tab>
                <Tab eventKey="Next 5" title="Next 5">
                    <p>Coming Soon...</p>
                </Tab>
            </Tabs>
            <h1>Brewers</h1>
            <Tabs>
                <Tab eventKey="Last 5" title="Last 5">
                    <Row>
                        {
                            brewLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                </Tab>
                <Tab eventKey="Next 5" title="Next 5">
                    <p>Coming Soon...</p>
                </Tab>
            </Tabs>
            <h1>Manchester City</h1>
            <Tabs>
                <Tab eventKey="Last 5" title="Last 5">
                    <Row>
                        {
                            mcLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                </Tab>
                <Tab eventKey="Next 5" title="Next 5">
                    <p>Coming Soon...</p>
                </Tab>
            </Tabs>
            <h1>Wrexham</h1>
            <Tabs>
                <Tab eventKey="Last 5" title="Last 5">
                    <Row>
                        {
                            wrexLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                </Tab>
                <Tab eventKey="Next 5" title="Next 5">
                    <p>Coming Soon...</p>
                </Tab>
            </Tabs>
            <h1>Minnesota United</h1>
            <Tabs>
                <Tab eventKey="Last 5" title="Last 5">
                    <Row>
                        {
                            minnLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                </Tab>
                <Tab eventKey="Next 5" title="Next 5">
                    <p>Coming Soon...</p>
                </Tab>
            </Tabs>
            <h1>Forward Madison</h1>
            <Tabs>
                <Tab eventKey="Last 5" title="Last 5">
                    <Row>
                        {
                            madLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                </Tab>
                <Tab eventKey="Next 5" title="Next 5">
                    <p>Coming Soon...</p>
                </Tab>
            </Tabs>
        </Container>
    </>
}

export default FavoriteTeams