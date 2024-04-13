import { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import MatchCard from "../../components/MatchCard";
import '../../App.css';

function PremierLeague() {
  const [matches, setMatches] = useState([]);
  const [matchday, setMatchday] = useState(33);

  const matchdays = [...Array(38).keys()];

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=${matchday}&s=2023-2024`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => setMatches(data.events))
  }, [matchday])

  return <>
    <Dropdown>
      <Dropdown.Toggle>Select Matchday</Dropdown.Toggle>
      <Dropdown.Menu>
        {
          matchdays.map(matchday => <Dropdown.Item onClick={() => setMatchday(matchday + 1)} key={matchday+1}>{matchday + 1}</Dropdown.Item>)
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
  </>
}

export default PremierLeague
