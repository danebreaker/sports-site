import { useEffect, useState } from 'react'
import './App.css'
import MatchCard from "./components/MatchCard";

function PremierLeague() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://www.thesportsdb.com/api/v1/json/3/eventsround.php?id=4328&r=33&s=2023-2024", {
      method: "GET"
    })
      .then(res => res.json())
      .then(data => setMatches(data.events))
  }, [])

  return <>
    {
      matches.map(match => <MatchCard {...match}></MatchCard>)
    }
  </>
}

export default PremierLeague
