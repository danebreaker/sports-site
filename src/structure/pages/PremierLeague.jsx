import { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Row, Tab, Table, Tabs } from 'react-bootstrap';
import MatchCard from "../../components/MatchCard";
import '../../App.css';

function PremierLeague() {
  const [matches, setMatches] = useState([]);
  const [matchday, setMatchday] = useState(33);
  const [table, setTable] = useState([]);

  const matchdays = [...Array(38).keys()];

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=${matchday}&s=2023-2024`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => setMatches(data.events))
  }, [matchday])

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=4328&s=2023-2024`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => setTable(data.table))
  }, [])

  return <>
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
                  <td style={{ backgroundColor: team.intRank > 18 ? "#fc3f3f" : "white" }}>{team.intRank}</td>
                  <td style={{ backgroundColor: team.intRank > 18 ? "#fc3f3f" : "white" }}>{team.strTeam}</td>
                  <td style={{ backgroundColor: team.intRank > 18 ? "#fc3f3f" : "white" }}>{team.intPlayed}</td>
                  <td style={{ backgroundColor: team.intRank > 18 ? "#fc3f3f" : "white" }}>{team.intWin}</td>
                  <td style={{ backgroundColor: team.intRank > 18 ? "#fc3f3f" : "white" }}>{team.intDraw}</td>
                  <td style={{ backgroundColor: team.intRank > 18 ? "#fc3f3f" : "white" }}>{team.intLoss}</td>
                  <td style={{ backgroundColor: team.intRank > 18 ? "#fc3f3f" : "white" }}>{team.intPoints}</td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </Tab>
      <Tab eventKey="Fixtures" title="Fixtures">
        <Dropdown>
          <Dropdown.Toggle>Select Matchday</Dropdown.Toggle>
          <Dropdown.Menu>
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

export default PremierLeague
