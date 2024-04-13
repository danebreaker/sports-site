import { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row, Tab, Table, Tabs } from 'react-bootstrap';
import MatchCard from "../../components/MatchCard";
import '../../App.css';

function NFL() {
    const [games, setGames] = useState([]);
    const [week, setWeek] = useState(1);
    const [season, setSeason] = useState("2023");
    const [standings, setStandings] = useState([]);
    const [seasons, setSeasons] = useState([]);

    const weeks18 = [...Array(18).keys()];
    const weeks17 = [...Array(17).keys()];

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4391&r=${week}&s=${season}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setGames(data.events))
        fetch(`https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?id=4391`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                let tempArray = data.seasons.slice(35, 61);
                tempArray.splice(4, 1);
                tempArray.splice(13, 1);
                setSeasons(tempArray.reverse());
            })
    }, [week, season])

    return <>
        <h1>NFL</h1>
        <Tabs fill>
            <Tab eventKey="Standings" title="Standings">
                <h3>Coming Soon...</h3>
            </Tab>
            <Tab eventKey="Schedule" title="Schedule">
                <div style={{ display: "inline-flex" }}>
                    <Dropdown style={{ marginRight: 5, marginTop: 10}}>
                        <Dropdown.Toggle>Select Week</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                season >= "2021" ?
                                    weeks18.map(week => <Dropdown.Item onClick={() => setWeek(week + 1)} key={week + 1}>{week + 1}</Dropdown.Item>)
                                    :
                                    weeks17.map(week => <Dropdown.Item onClick={() => setWeek(week + 1)} key={week + 1}>{week + 1}</Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown style={{ marginLeft: 5, marginTop: 10 }}>
                        <Dropdown.Toggle>Select Season</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                seasons.map(season => <Dropdown.Item onClick={() => setSeason(season.strSeason)} key={season.strSeason}>{season.strSeason}</Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
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

export default NFL