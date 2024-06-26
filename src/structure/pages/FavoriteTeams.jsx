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
    const [packNext5, setPackNext5] = useState([]);
    const [bucksNext5, setBucksNext5] = useState([]);
    const [brewNext5, setBrewNext5] = useState([]);
    const [mcNext5, setMCNext5] = useState([]);
    const [wrexNext5, setWrexNext5] = useState([]);
    const [minnNext5, setMinnNext5] = useState([]);
    const [madNext5, setMadNext5] = useState([]);

    const importantLeagues = ["English Premier League", "English League Championship", "German Bundesliga", "Italian Serie A", "French Lique 1", "Spanish La Liga", "American Major League Soccer", "NBA", "NFL", "English League 1", "English League 2", "UEFA Champions League"]
    const importantTeams = [["Green Bay Packers", 134940], ["Milwaukee Bucks", 134874], ["Milwaukee Brewers", 135274], ["Manchester City", 133613], ["Wrexham", 134775], ["Minnesota United", 135852], ["Forward Madison FC", 142160]]

    useEffect(() => {
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventslast.php?id=134940", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setPackLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventslast.php?id=134874", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setBucksLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventslast.php?id=135274", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setBrewLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventslast.php?id=133613", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setMCLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventslast.php?id=134775", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setWrexLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventslast.php?id=135852", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setMinnLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventslast.php?id=142160", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setMadLast5(data.results)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventsnext.php?id=134940", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setPackNext5(data.events)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventsnext.php?id=134874", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setBucksNext5(data.events)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventsnext.php?id=135274", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setBrewNext5(data.events)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventsnext.php?id=133613", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setMCNext5(data.events);
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventsnext.php?id=134775", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setWrexNext5(data.events)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventsnext.php?id=135852", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setMinnNext5(data.events)
            })
        fetch("https://www.thesportsdb.com/api/v1/json/60130162/eventsnext.php?id=142160", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setMadNext5(data.events)
            })
    }, [])

    return <>
        <Tabs fill>
            <Tab eventKey="Live Scores" title="Live" style={{ margin: 15 }}>
                <h1>Coming Soon...</h1>
            </Tab>
            <Tab eventKey="Upcoming Games" title="Next" style={{ margin: 15 }}>
                <Container fluid>
                    <Row>
                        <h1>Packers</h1>
                        {
                            packNext5 ?
                                packNext5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                                :
                                <h3>No upcoming games</h3>
                        }
                    </Row>
                    <Row>
                        <h1>Bucks</h1>
                        {
                            bucksNext5 ?
                                bucksNext5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                                :
                                <h3>No upcoming games</h3>
                        }
                    </Row>
                    <Row>
                        <h1>Brewers</h1>
                        {
                            brewNext5 ?
                                brewNext5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                                :
                                <h3>No upcoming games</h3>
                        }
                    </Row>
                    <Row>
                        <h1>Manchester City</h1>
                        {
                            mcNext5 ?
                                mcNext5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                                :
                                <h3>No upcoming games</h3>
                        }
                    </Row>
                    <Row>
                        <h1>Wrexham AFC</h1>
                        {
                            wrexNext5 ?
                                wrexNext5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                                :
                                <h3>No upcoming games</h3>
                        }
                    </Row>
                    <Row>
                        <h1>Minnesota United</h1>
                        {
                            minnNext5 ?
                                minnNext5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                                :
                                <h3>No upcoming games</h3>
                        }
                    </Row>
                    <Row>
                        <h1>Forward Madison FC</h1>
                        {
                            madNext5 ?
                                madNext5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                                :
                                <h3>No upcoming games</h3>
                        }
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="Previous Games" title="Prev" style={{ margin: 15 }}>
                <Container fluid>
                    <Row>
                        <h1>Packers</h1>
                        {
                            packLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                    <Row>
                        <h1>Bucks</h1>
                        {
                            bucksLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                    <Row>
                        <h1>Brewers</h1>
                        {
                            brewLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                    <h1>Manchester City</h1>
                    <Row>
                        {
                            mcLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                    <h1>Wrexham AFC</h1>
                    <Row>
                        {
                            wrexLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                    <h1>Minnesota United</h1>
                    <Row>
                        {
                            minnLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                    <h1>Forward Madison FC</h1>
                    <Row>
                        {
                            madLast5.map(match => <Col xs={12} sm={6} md={4} lg={4} xl={3} key={match.idEvent}><MatchCard {...match} /></Col>)
                        }
                    </Row>
                </Container>
            </Tab>
        </Tabs >
    </>
}

export default FavoriteTeams