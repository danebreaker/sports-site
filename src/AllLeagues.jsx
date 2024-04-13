import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './App.css'

function AllLeagues() {
  const [leagues, setLeagues] = useState([]);
  const importantLeagues = ["English Premier League", "English League Championship", "German Bundesliga", "Italian Serie A", "French Lique 1", "Spanish La Liga", "American Major League Soccer", "NBA", "NFL", "English League 1", "English League 2"]

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/3/all_leagues.php", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        setLeagues(data.leagues.sort((a, b) => {
          let itemA = a.strSport.toLowerCase();
          let itemB = b.strSport.toLowerCase();
          if (itemA < itemB) return -1;
          if (itemA > itemB) return 1;
          return 0;
        }))
      })
  }, [])

  return <>
    <Container fluid>
      <Row>
        {
          leagues.map(league => {
            return importantLeagues.includes(league.strLeague) ?
              <Col xs={12} sm={6} md={6} lg={4} xl={3} key={league.idLeague}>
                <Card>
                  <Card.Body>
                    <Button>
                      <Card.Title>{league.strLeague}</Card.Title>
                      <Card.Text>{league.strSport}</Card.Text>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              :
              <></>
          })
        }
      </Row>
    </Container>
  </>
}

export default AllLeagues