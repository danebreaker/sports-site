import { Card } from "react-bootstrap";

export default function MatchCard(props) {
    const date = new Date(props.dateEventLocal);

    return <Card style={{ backgroundColor: "#383838", color: "white", margin: 10, alignContent: 'center' }}>
        <h5>{props.strEvent}</h5>
        <h6>{props.strSport === "Soccer" ? props.strLeague : ""}</h6>
        <h7>{date.toDateString()}</h7>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={props.strHomeTeamBadge + '/tiny'}></img>
            <h4 style={{ marginTop: 10, marginLeft: 10, marginRight: 10}}>{props.intHomeScore ? props.intHomeScore : "0"}</h4>
            {/* <h4>{props.strHomeTeam}</h4> */}
            <h4 style={{ marginTop: 9, marginLeft: 10, marginRight: 10}}>-</h4>
            <h4 style={{ marginTop: 10, marginLeft: 10, marginRight: 10}}>{props.intAwayScore ? props.intAwayScore : "0"}</h4>
            {/* <h4>{props.strAwayTeam}</h4> */}
            <img src={props.strAwayTeamBadge + '/tiny'}></img>
        </div>
    </Card>
}